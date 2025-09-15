import ExchangeOptions from './exchange-options';
import TableTotal from './table-total';
import MoneyTable from './table';
import { MoneyCounterProvider } from './money-counter-context';

export default function MoneyCounter() {
  return (
    <MoneyCounterProvider>
      <ExchangeOptions />
      <section className="flex flex-col mx-auto w-full gap-10">
        <div className="flex flex-col mx-auto w-full max-w-85 sm:max-w-full gap-10 md:flex-row justify-center">
          <MoneyTable moneyType="dollar" />
          <MoneyTable moneyType="cordoba" />
        </div>
        <TableTotal />
      </section>
    </MoneyCounterProvider>
  );
}
