import { useMoneyCounterContext } from './money-counter-context';
import { formatter } from './number-formatter';

export default function TableTotal() {
  const { dollarsTotal, cordobasTotal } = useMoneyCounterContext();

  return (
    <section className="flex flex-col w-full max-w-85 gap-1 mx-auto">
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
            $ {dollarsTotal === 0 ? '-' : formatter.format(dollarsTotal)}
          </span>
          <span className="px-3 text-center font-bold truncate">
            C$ {cordobasTotal === 0 ? '-' : formatter.format(cordobasTotal)}
          </span>
        </div>
      </div>
    </section>
  );
}
