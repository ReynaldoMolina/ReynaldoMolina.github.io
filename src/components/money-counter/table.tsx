import type { MoneyType, SetStateBoolean } from '@/types/types';
import { ChevronDown, Delete } from 'lucide-react';
import { useState } from 'react';
import BillIcon from '@/icons/money-bill.svg?react';
import CoinIcon from '@/icons/coin.svg?react';
import { useMoneyCounterContext } from './money-counter-context';
import { formatter } from './number-formatter';

export default function MoneyTable({ moneyType }: { moneyType: MoneyType }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="flex flex-col gap-1">
      <TableTitle isOpen={isOpen} setIsOpen={setIsOpen} moneyType={moneyType} />
      <Table isOpen={isOpen}>
        <TableHead />
        <TableBody moneyType={moneyType} />
        <TableFooter moneyType={moneyType} />
      </Table>
    </section>
  );
}

function TableTitle({
  isOpen,
  setIsOpen,
  moneyType,
}: {
  isOpen: boolean;
  setIsOpen: SetStateBoolean;
  moneyType: MoneyType;
}) {
  const { resetQuantities } = useMoneyCounterContext();
  const tableTitle = moneyType === 'dollar' ? 'Dollars' : 'Córdobas';

  return (
    <div className="inline-flex items-center w-full md:min-w-85 max-w-85 px-3 py-2 mx-auto bg-neutral-200 dark:bg-neutral-600 rounded-xl">
      <span className="font-bold">{tableTitle}</span>
      <div className="inline-flex gap-1 ml-auto">
        <TableHeaderButton
          title="Show / Hide"
          onClick={() => setIsOpen((state) => !state)}
        >
          <ChevronDown className={`${isOpen && 'rotate-180'} size-6`} />
        </TableHeaderButton>
        <TableHeaderButton
          title="Reset"
          onClick={() => resetQuantities(moneyType)}
        >
          <Delete className="size-5" />
        </TableHeaderButton>
      </div>
    </div>
  );
}

function Table({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) {
  return (
    <table
      className={`${
        isOpen ? 'table' : 'hidden md:table'
      } w-full max-w-85 sm:w-85 mx-auto rounded-xl`}
    >
      {children}
    </table>
  );
}

function TableHead() {
  return (
    <thead>
      <tr className="flex bg-neutral-200 dark:bg-neutral-600 px-3 py-1 rounded-t-xl">
        <th className="font-bold text-left w-6/20">Unit</th>
        <th className="font-bold text-right w-6/20">Quantity</th>
        <th className="font-bold text-right w-8/20">Total C$</th>
      </tr>
    </thead>
  );
}

function TableHeaderButton({
  children,
  title,
  onClick,
}: {
  children: React.ReactNode;
  title: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      title={title}
      className="inline-flex items-center justify-center md:hidden h-7 w-9 rounded-lg p-1.5 cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-white dark:hover:bg-neutral-800"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function TableBody({ moneyType }: { moneyType: MoneyType }) {
  const { updateQuantity, dollars, cordobas } = useMoneyCounterContext();
  const money = moneyType === 'dollar' ? dollars : cordobas;

  return (
    <tbody>
      {money.map((bill, index) => (
        <tr
          key={bill.value}
          className="flex border-b-1 border-neutral-300 dark:border-neutral-500 px-3 py-1 bg-neutral-100 dark:bg-neutral-700 gap-1"
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
              onChange={(event) => {
                const quantity = event.target.valueAsNumber;
                updateQuantity({
                  index,
                  quantity,
                  moneyType,
                });
              }}
            />
          </td>
          {/* Subtotal */}
          <td className="text-right w-8/20 truncate">
            <span>
              {bill.subtotal === 0 ? '-' : formatter.format(bill.subtotal)}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

function TableFooter({ moneyType }: { moneyType: MoneyType }) {
  const { dollarsQuantity, dollarsTotal, cordobasInDollars, cordobasTotal } =
    useMoneyCounterContext();

  const totalQuantity =
    moneyType === 'dollar' ? dollarsQuantity : cordobasInDollars;
  const total = moneyType === 'dollar' ? dollarsTotal : cordobasTotal;

  return (
    <tfoot>
      <tr className="flex items-center gap-1 py-1 px-3 bg-neutral-200 dark:bg-neutral-600 rounded-b-xl">
        <th className="font-bold text-sm text-left w-6/20">Total</th>
        <th className="font-bold text-sm text-right w-6/20 truncate">
          <span>
            $ {totalQuantity === 0 ? '-' : formatter.format(totalQuantity)}
          </span>
        </th>
        <th className="font-bold text-sm text-right w-8/20 truncate">
          <span>C$ {total === 0 ? '-' : formatter.format(total)}</span>
        </th>
      </tr>
    </tfoot>
  );
}
