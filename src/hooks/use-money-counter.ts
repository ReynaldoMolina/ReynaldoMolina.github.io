import { useState, useEffect } from "react";
import { dollarsObj, cordobasObj } from "../data/money";
import { toast } from "sonner";

export function useMoneyCounter() {
  const [exchangeRate, setExchangeRate] = useState("");
  const [toCount, setToCount] = useState("");
  const [dollars, setDollars] = useState(dollarsObj);
  const [cordobas, setCordobas] = useState(cordobasObj);

  // --- HANDLERS ---

  function handleExchange(newRate: number | string) {
    const rate = isNaN(Number(newRate)) ? 1 : newRate;
    setExchangeRate(String(newRate));

    setDollars((prev) =>
      prev.map((bill) => {
        const quantity = isNaN(Number(bill.quantity)) ? "" : bill.quantity;
        const subtotal = bill.value * Number(quantity) * Number(rate);
        return { ...bill, subtotal };
      })
    );
  }

  function handleDollars(index: number, newQuantity: string) {
    const quantity = isNaN(Number(newQuantity)) ? "" : newQuantity;
    const rate =
      isNaN(Number(exchangeRate)) || exchangeRate === ""
        ? 1
        : Number(exchangeRate);

    setDollars((prev) =>
      prev.map((bill, i) => {
        const subtotal = bill.value * (Number(quantity) || 0) * rate;
        return i === index ? { ...bill, quantity, subtotal } : bill;
      })
    );
  }

  function handleCordobas(index: number, newQuantity: string) {
    const quantity = isNaN(Number(newQuantity)) ? 0 : newQuantity;
    setCordobas((prev) =>
      prev.map((bill, i) => {
        const subtotal = bill.value * Number(quantity);
        return i === index
          ? { ...bill, quantity: newQuantity, subtotal }
          : bill;
      })
    );
  }

  function resetDollars() {
    setDollars((prev) =>
      prev.map((bill) => ({ ...bill, quantity: "", subtotal: 0 }))
    );
  }

  function resetCordobas() {
    setCordobas((prev) =>
      prev.map((bill) => ({ ...bill, quantity: "", subtotal: 0 }))
    );
  }

  // --- LOCAL STORAGE ---

  function saveToLocalStorage() {
    try {
      const payload = { dollars, cordobas, exchangeRate, toCount };
      localStorage.setItem("MONEY_DATA", JSON.stringify(payload));
      toast.success("Saved!");
    } catch (error) {
      console.error("Failed to write to localStorage:", error);
      toast.error("Failed to write to localStorage.");
    }
  }

  function loadFromLocalStorage() {
    try {
      const raw = localStorage.getItem("MONEY_DATA");
      if (!raw) return;

      const { dollars, cordobas, exchangeRate, toCount } = JSON.parse(raw);
      setDollars(dollars);
      setCordobas(cordobas);
      setExchangeRate(exchangeRate);
      setToCount(toCount);
    } catch (err) {
      console.error("Failed to read from localStorage:", err);
    }
  }

  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  // --- DERIVED VALUES ---

  const dollarsQuantity = dollars.reduce(
    (sum, bill) =>
      sum +
      (isNaN(Number(bill.quantity)) ? 0 : Number(bill.quantity)) * bill.value,
    0
  );

  const dollarsTotal = dollars.reduce(
    (sum, bill) => sum + (isNaN(Number(bill.quantity)) ? 0 : bill.subtotal),
    0
  );

  const cordobasTotal = cordobas.reduce(
    (sum, bill) => sum + (isNaN(Number(bill.quantity)) ? 0 : bill.subtotal),
    0
  );

  const rate =
    exchangeRate === "" || isNaN(Number(exchangeRate))
      ? 1
      : Number(exchangeRate);
  const cordobasInDollars = cordobasTotal / rate;
  const cordobasGeneralTotal = dollarsTotal + cordobasTotal;
  const dollarsGeneralTotal = cordobasGeneralTotal / rate;
  const difference = Number(toCount) - cordobasGeneralTotal;

  // --- RETURN ALL STATE AND ACTIONS ---
  return {
    dollars,
    cordobas,
    exchangeRate,
    toCount,
    setToCount,
    handleExchange,
    handleDollars,
    handleCordobas,
    resetDollars,
    resetCordobas,
    saveToLocalStorage,
    dollarsQuantity,
    dollarsTotal,
    cordobasTotal,
    cordobasInDollars,
    cordobasGeneralTotal,
    dollarsGeneralTotal,
    difference,
  };
}
