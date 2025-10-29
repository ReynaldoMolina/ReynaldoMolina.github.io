import { useState, type Dispatch, type SetStateAction } from "react";
import ClearIcon from "../icons/clear.svg?react";
import BillIcon from "../icons/money-bill.svg?react";
import CoinIcon from "../icons/coin.svg?react";
import ExchangeIcon from "../icons/exchange.svg?react";
import MoneyIcon from "../icons/money.svg?react";
import CompareIcon from "../icons/compare.svg?react";
import DropdownIcon from "../icons/dropdown.svg?react";
import { useMoneyCounter } from "@/hooks/use-money-counter";
import type { Money } from "@/data/money";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export function MoneyCounter() {
  const {
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
  } = useMoneyCounter();

  return (
    <>
      <ExchangeRate
        exchangeRate={exchangeRate}
        handleExchange={handleExchange}
        toCount={toCount}
        setToCount={setToCount}
        difference={difference}
        action={saveToLocalStorage}
      />

      <section className="flex flex-col mx-auto w-full gap-10">
        <div className="flex flex-col mx-auto w-full max-w-85 sm:max-w-full gap-10 md:flex-row justify-center">
          <Table
            tableName="Dollars"
            resetTable={resetDollars}
            data={dollars}
            handleData={handleDollars}
            totalQuantity={dollarsQuantity}
            total={dollarsTotal}
          />

          <Table
            tableName="Córdobas"
            resetTable={resetCordobas}
            data={cordobas}
            handleData={handleCordobas}
            totalQuantity={cordobasInDollars}
            total={cordobasTotal}
          />
        </div>

        <TableTotal
          dollarsTotal={dollarsGeneralTotal}
          cordobasTotal={cordobasGeneralTotal}
        />
      </section>
    </>
  );
}

interface ExchangeRate {
  exchangeRate: string;
  handleExchange: (newRate: number) => void;
  toCount: string;
  setToCount: Dispatch<SetStateAction<string>>;
  difference: number;
  action: () => void;
}

function ExchangeRate({
  exchangeRate,
  handleExchange,
  toCount,
  setToCount,
  difference,
  action,
}: ExchangeRate) {
  return (
    <Card className="w-full max-w-85 mx-auto">
      <CardContent className="flex flex-col gap-4">
        <div className="flex w-full justify-between">
          <div className="flex gap-3 items-center">
            <ExchangeIcon className="size-4" />
            <span>Exchange rate</span>
          </div>
          <ExchangeRateInput
            value={exchangeRate}
            setValue={handleExchange}
            placeholder="1"
          />
        </div>

        <div className="flex w-full justify-between">
          <div className="flex gap-3 items-center">
            <MoneyIcon className="size-4" />
            <span>Amount to count</span>
          </div>
          <ExchangeRateInput
            value={toCount}
            setValue={setToCount}
            placeholder="0"
          />
        </div>

        {Number(toCount) > 0 && (
          <div className="flex w-full justify-between">
            <div className="flex gap-3 items-center">
              <CompareIcon className="size-4" />
              <span>Difference</span>
            </div>
            <span className="w-25 sm:w-30 text-center truncate">
              {isNaN(Number(toCount)) || toCount === ""
                ? "-"
                : difference.toFixed(2)}
            </span>
          </div>
        )}

        <SaveMoneyLocal action={action} />
      </CardContent>
    </Card>
  );
}

interface ExchangeRateInput {
  value: string;
  setValue: any;
  placeholder: string;
}

function ExchangeRateInput({
  value,
  setValue,
  placeholder,
}: ExchangeRateInput) {
  return (
    <input
      type="number"
      className="w-25 sm:w-30 border-b-2 border-neutral-400 text-center focus-visible:outline-0 focus-visible:border-neutral-500 dark:focus-visible:border-neutral-300"
      value={value}
      placeholder={placeholder}
      min={0}
      onChange={(event) => setValue(event.target.valueAsNumber)}
    />
  );
}

interface Table {
  tableName: string;
  resetTable: () => void;
  data: Money[];
  handleData: (index: number, newQuantity: string) => void;
  totalQuantity: number;
  total: number;
}

function Table({
  tableName,
  resetTable,
  data,
  handleData,
  totalQuantity,
  total,
}: Table) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="flex flex-col gap-1">
      <div className="flex justify-between w-full md:min-w-85 max-w-85 px-3 py-2 mx-auto bg-neutral-200 dark:bg-neutral-600 rounded-xl">
        <span className="flex items-center font-bold">{tableName}</span>
        <div className="flex gap-1">
          <DropdownIcon
            className={`${
              isOpen && "rotate-180"
            } md:hidden h-7 w-9 rounded-lg p-1 cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-white dark:hover:bg-neutral-800`}
            onClick={() => setIsOpen((state) => !state)}
          />
          <ClearIcon
            className="h-7 w-9 rounded-lg p-1 cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-white dark:hover:bg-neutral-800"
            onClick={() => resetTable()}
          />
        </div>
      </div>

      <table
        className={`${
          isOpen ? "table" : "hidden md:table"
        } w-full max-w-85 sm:w-85 mx-auto rounded-xl`}
      >
        <thead>
          <tr className="flex bg-neutral-200 dark:bg-neutral-600 px-3 py-1 rounded-t-xl">
            <th className="font-bold text-left w-6/20">Unit</th>
            <th className="font-bold text-right w-6/20">Quantity</th>
            <th className="font-bold text-right w-8/20">Total C$</th>
          </tr>
        </thead>
        <tbody>
          {data.map((bill, index) => (
            <tr
              key={bill.value}
              className="flex border-b border-neutral-300 dark:border-neutral-500 px-3 py-1 bg-neutral-100 dark:bg-neutral-700 gap-1"
            >
              {/* Unit */}
              <td className="flex items-center gap-3 text-right w-6/20">
                {bill.coin ? (
                  <CoinIcon className="size-4 text-yellow-400" />
                ) : (
                  <BillIcon className="size-4 text-green-400" />
                )}
                {bill.value < 1 ? bill.value.toFixed(2) : bill.value}
              </td>
              {/* Input */}
              <td className="w-6/20">
                <input
                  type="number"
                  className="text-right w-full focus-visible:outline-0"
                  value={bill.quantity}
                  min={0}
                  placeholder="-"
                  onChange={(event) => handleData(index, event.target.value)}
                />
              </td>
              {/* Subtotal */}
              <td className="text-right w-8/20 truncate">
                <span>
                  {bill.subtotal === 0 ? "-" : bill.subtotal.toFixed(2)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="flex items-center gap-1 py-1 px-3 bg-neutral-200 dark:bg-neutral-600 rounded-b-xl">
            <th className="font-bold text-sm text-left w-6/20">Total</th>
            <th className="font-bold text-sm text-right w-6/20 truncate">
              <span>
                $ {totalQuantity === 0 ? "-" : totalQuantity.toFixed(2)}
              </span>
            </th>
            <th className="font-bold text-sm text-right w-8/20 truncate">
              <span>C$ {total === 0 ? "-" : total.toFixed(2)}</span>
            </th>
          </tr>
        </tfoot>
      </table>
    </section>
  );
}

interface TableTotal {
  dollarsTotal: number;
  cordobasTotal: number;
}

function TableTotal({ dollarsTotal, cordobasTotal }: TableTotal) {
  return (
    <section className="flex flex-col w-full max-w-85 gap-1 mx-auto mb-10">
      <div className="flex justify-center w-full px-3 py-2.5 mx-auto bg-neutral-200 dark:bg-neutral-600 rounded-xl">
        <span className="flex items-center font-bold">General total</span>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex justify-around w-full bg-neutral-200 dark:bg-neutral-600 py-1 rounded-t-xl">
          <span className="text-center font-bold">Dollars</span>
          <span className="text-center font-bold">Córdobas</span>
        </div>
        <div className="flex justify-around w-full bg-neutral-100 dark:bg-neutral-700 py-1 rounded-b-xl shadow">
          <span className="px-3 text-center font-bold truncate">
            $ {dollarsTotal === 0 ? "-" : dollarsTotal.toFixed(2)}
          </span>
          <span className="px-3 text-center font-bold truncate">
            C$ {cordobasTotal === 0 ? "-" : cordobasTotal.toFixed(2)}
          </span>
        </div>
      </div>
    </section>
  );
}

function SaveMoneyLocal({ action }: { action: () => void }) {
  return (
    <Button type="button" onClick={action}>
      Save
    </Button>
  );
}
