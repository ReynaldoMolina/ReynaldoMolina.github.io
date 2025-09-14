import { useState, useEffect } from "react";
import {
  type Bill,
  type MoneyType,
  type Quantity,
  type QuantityProps,
} from "../../types/types";
import { dollarsObj, cordobasObj } from "../../assets/moneycounterdata";

export function useMoneyCounter() {
  const [exchangeRate, setExchangeRate] = useState<Quantity>("");
  const [toCount, setToCount] = useState<Quantity>("");
  const [dollars, setDollars] = useState(dollarsObj);
  const [cordobas, setCordobas] = useState(cordobasObj);

  function updateExchange(rate: Quantity) {
    const newRate: Quantity = typeof rate === "number" ? rate : "";
    setExchangeRate(newRate);

    setDollars((prev) =>
      prev.map((bill) => {
        const quantity = typeof bill.quantity === "number" ? bill.quantity : 0;
        const subtotalRate =
          typeof newRate === "number" && !isNaN(newRate) ? newRate : 1;
        const subtotal = bill.value * quantity * subtotalRate;
        return { ...bill, subtotal };
      })
    );
  }

  function updateQuantity({ index, quantity, moneyType }: QuantityProps) {
    const isValidQuantity = typeof quantity === "number";
    const isDollar = moneyType === "dollar";
    const newQuantity = isValidQuantity ? quantity : "";
    const quantitySubtotal = isValidQuantity && !isNaN(quantity) ? quantity : 0;
    const rate = typeof exchangeRate === "number" ? exchangeRate : 1;

    // Calculate subtotal
    const updater = (bill: Bill, i: number) => {
      const subtotal = bill.value * quantitySubtotal * (isDollar ? rate : 1);
      return i === index
        ? {
            ...bill,
            ...{ quantity: newQuantity, subtotal },
          }
        : bill;
    };

    if (isDollar) {
      setDollars((prev) => prev.map(updater));
    } else {
      setCordobas((prev) => prev.map(updater));
    }
  }

  function resetQuantities(moneyType: MoneyType) {
    const reset = (bill: Bill) => ({ ...bill, quantity: "", subtotal: 0 });

    if (moneyType === "dollar") {
      setDollars((prev) => prev.map(reset));
    } else {
      setCordobas((prev) => prev.map(reset));
    }
  }

  function saveToLocalStorage() {
    try {
      const payload = { dollars, cordobas, exchangeRate, toCount };
      localStorage.setItem("MONEY_DATA", JSON.stringify(payload));
      alert("Saved!");
    } catch (error) {
      console.error("Failed to write to localStorage:", error);
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
    } catch (error) {
      console.error("Failed to read from localStorage:", error);
    }
  }

  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  const dollarsQuantity = dollars.reduce(
    (sum, { quantity, value }) =>
      sum +
      (typeof quantity === "number" && !isNaN(quantity) ? quantity : 0) * value,
    0
  );
  const dollarsTotal = dollars.reduce((sum, { subtotal }) => sum + subtotal, 0);
  const cordobasTotal = cordobas.reduce(
    (sum, { subtotal }) => sum + subtotal,
    0
  );
  const safeExchangeRate =
    typeof exchangeRate === "string" || exchangeRate === 0 ? 1 : exchangeRate;
  const cordobasInDollars = cordobasTotal / safeExchangeRate;
  const cordobasGeneralTotal = dollarsTotal + cordobasTotal;
  const dollarsGeneralTotal = cordobasGeneralTotal / safeExchangeRate;
  const difference =
    (typeof toCount === "string" ? 0 : toCount) - cordobasGeneralTotal;

  return {
    exchangeRate,
    toCount,
    dollars,
    cordobas,
    setToCount,
    updateExchange,
    updateQuantity,
    resetQuantities,
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
