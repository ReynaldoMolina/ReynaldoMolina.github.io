import type { ExchangeInputProps } from '@/types/types';
import { Calculator, CircleDollarSign, Diff } from 'lucide-react';
import { useMoneyCounterContext } from './money-counter-context';
import { formatter } from './number-formatter';
import { useState } from 'react';

export default function ExchangeOptions() {
  return (
    <section className="flex flex-col items-center bg-neutral-100 dark:bg-neutral-700 rounded-xl gap-3 p-5 w-full max-w-85 mx-auto shadow-md">
      <ExchangeRate />
      <AmountToCount />
      <Difference />
      <SaveMoneyLocal />
    </section>
  );
}

function Input({ value, setValue, placeholder }: ExchangeInputProps) {
  const [isEditing, setIsEditing] = useState(false);
  const style = 'w-25 sm:w-30 border-b-2 border-neutral-400 text-center';

  if (!isEditing)
    return (
      <span
        className={`${style} cursor-text`}
        onClick={() => setIsEditing(true)}
      >
        {isNaN(Number(value)) ? placeholder : formatter.format(Number(value))}
      </span>
    );

  return (
    <input
      type="number"
      autoFocus
      className={`${style} focus-visible:outline-0 focus-visible:border-neutral-500 dark:focus-visible:border-neutral-300`}
      value={value}
      placeholder={placeholder}
      min={0}
      onChange={(event) => setValue(event.target.valueAsNumber)}
      onBlur={() => setIsEditing(false)}
    />
  );
}

function ExchangeRate() {
  const { exchangeRate, updateExchange } = useMoneyCounterContext();

  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-3 items-center">
        <CircleDollarSign className="size-4" />
        Exchange rate
      </div>
      <Input
        value={exchangeRate}
        setValue={updateExchange}
        placeholder="1.00"
      />
    </div>
  );
}

function AmountToCount() {
  const { toCount, setToCount } = useMoneyCounterContext();

  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-3 items-center">
        <Calculator className="size-4" />
        <span>Amount to count</span>
      </div>
      <Input value={toCount} setValue={setToCount} placeholder="0.00" />
    </div>
  );
}

function Difference() {
  const { toCount, difference } = useMoneyCounterContext();

  return typeof toCount === 'number' && toCount > 0 ? (
    <div className="flex w-full justify-between">
      <div className="flex gap-3 items-center">
        <Diff className="size-4" />
        <span>Difference</span>
      </div>
      <span className="w-25 sm:w-30 text-center truncate">
        {typeof toCount === 'string' || isNaN(toCount)
          ? '-'
          : formatter.format(difference)}
      </span>
    </div>
  ) : null;
}

function SaveMoneyLocal() {
  const { saveToLocalStorage } = useMoneyCounterContext();

  return (
    <button
      className="bg-blue-600 font-semibold p-2 w-full max-w-85 mx-auto rounded-xl cursor-pointer transition hover:bg-blue-700 text-white mt-2"
      onClick={saveToLocalStorage}
    >
      Save
    </button>
  );
}
