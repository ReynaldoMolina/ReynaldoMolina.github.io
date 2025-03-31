import { useState } from 'react';
import ClearIcon from '../icons/clear.svg';
import '../styles/global.css';

function MoneyCounter() {  
  const [exchangeRate, setExchangeRate] = useState('');
  const [toCount, setToCount] = useState('');
  const [dollars, setDollars] = useState([
    { value: 100, quantity: '', subtotal: 0 },
    { value: 50, quantity: '', subtotal: 0 },
    { value: 20, quantity: '', subtotal: 0 },
    { value: 10, quantity: '', subtotal: 0 },
    { value: 5, quantity: '', subtotal: 0 },
    { value: 2, quantity: '', subtotal: 0 },
    { value: 1, quantity: '', subtotal: 0 },
    { value: 0.50, quantity: '', subtotal: 0 },
    { value: 0.25, quantity: '', subtotal: 0 },
    { value: 0.10, quantity: '', subtotal: 0 },
    { value: 0.05, quantity: '', subtotal: 0 },
    { value: 0.01, quantity: '', subtotal: 0 },
  ]);
  const [cordobas, setCordobas] = useState([
    { value: 1000, quantity: '', subtotal: 0 },
    { value: 500, quantity: '', subtotal: 0 },
    { value: 200, quantity: '', subtotal: 0 },
    { value: 100, quantity: '', subtotal: 0 },
    { value: 50, quantity: '', subtotal: 0 },
    { value: 20, quantity: '', subtotal: 0 },
    { value: 10, quantity: '', subtotal: 0 },
    { value: 5, quantity: '', subtotal: 0 },
    { value: 1, quantity: '', subtotal: 0 },
    { value: 0.5, quantity: '', subtotal: 0 },
    { value: 0.25, quantity: '', subtotal: 0 },
    { value: 0.1, quantity: '', subtotal: 0 },
  ]);

  function handleExchange(newRate) {
    let rate;
    if (isNaN(newRate)) {
      rate = 1;
    } else {
      rate = newRate;
    }
    setExchangeRate(newRate);
  
    setDollars((prevDollars) =>
      prevDollars.map((bill) => {
        let qty;
        if (isNaN(bill.quantity)) {
          qty = 0;
        } else {
          qty = bill.quantity;
        }

        return ({
          ...bill,
          subtotal: bill.value * qty * rate,
        })
      })
    );
  }

  function handleDollars(index, newQuantity) {
    let qty, rate = 0;
    if (isNaN(newQuantity)) {
      qty = '';
    } else {
      qty = newQuantity;
    }

    if (isNaN(exchangeRate) || (exchangeRate === '')) {
      rate = 1;
    } else {
      rate = exchangeRate;
    }

    const updatedDollars = dollars.map((bill, i) =>
      i === index ? {
        ...bill,
        quantity: qty,
        subtotal: bill.value * qty * rate,
      } : bill
    );

    setDollars(updatedDollars);
  };

  function handleCordobas(index, newQuantity) {
    let qty = 0;
    if (isNaN(newQuantity)) {
      qty = 0;
    } else {
      qty = newQuantity;
    }
    const updatedCordobas = cordobas.map((bill, i) =>
      i === index ? {
        ...bill,
        quantity: newQuantity,
        subtotal: bill.value * qty,
      } : bill
    );

    setCordobas(updatedCordobas);
  };

  function resetDollars() {
    const updatedDollars = dollars.map((bill) =>
      ({
        ...bill,
        quantity: '',
        subtotal: 0,
      })
    );

    setDollars(updatedDollars);
  }

  function resetCordobas() {
    const updatedCordobas = cordobas.map((bill) =>
      ({
        ...bill,
        quantity: '',
        subtotal: 0,
      })
    );

    setCordobas(updatedCordobas);
  }

  const dollarsQuantity = dollars.reduce((sum, bill) => sum + ((isNaN(bill.quantity) ? 0 : bill.quantity) * bill.value), 0);
  const dollarsTotal = dollars.reduce((sum, bill) => sum + (isNaN(bill.quantity) ? 0 : bill.subtotal), 0);
  const cordobasTotal = cordobas.reduce((sum, bill) => sum + (isNaN(bill.quantity) ? 0 : bill.subtotal), 0);
  const cordobasInDollars = cordobasTotal / (exchangeRate === '' || isNaN(exchangeRate) ? 1 : exchangeRate);
  const cordobaGeneralTotal = dollarsTotal + cordobasTotal;
  const dollarsGeneralTotal = cordobaGeneralTotal / (exchangeRate === '' || isNaN(exchangeRate) ? 1 : exchangeRate);
  const difference = toCount - cordobaGeneralTotal;

  return (
    <main className='flex flex-col gap-10'>
      <h1 className='mx-auto text-2xl font-bold dark:text-yellow-400 text-yellow-600'>Money Counter</h1>

      {/* exchangeRate, toCount, difference */}
      <div className='flex flex-col items-center bg-neutral-300 dark:bg-neutral-600 rounded-2xl gap-3 py-3 px-4 w-full max-w-85 mx-auto'>
        <div className='flex w-full justify-between'>
          <span>Exchange rate</span>
          <input
            type="number"
            className='w-25 sm:w-30 border-b-2 border-neutral-400 text-center focus-visible:outline-0 focus-visible:border-neutral-500 dark:focus-visible:border-neutral-300'
            value={exchangeRate}
            placeholder='1'
            min={0}
            onChange={(event) => handleExchange(event.target.valueAsNumber)}/>
        </div>
        <div className='flex w-full justify-between'>
          <span>Amount to count</span>
          <input
            type="number"
            className='w-25 sm:w-30 border-b-2 border-neutral-400 text-center focus-visible:outline-0 focus-visible:border-neutral-500 dark:focus-visible:border-neutral-300'
            value={toCount}
            placeholder='0'
            min={0}
            onChange={(event) => setToCount(event.target.valueAsNumber)}/>
        </div>
        <div className='flex w-full justify-between'>
          <span>Difference</span>
          <span
            type="number"
            className='w-25 sm:w-30 text-center'
            >
            {(isNaN(toCount) || toCount === '') ? '-' : difference.toFixed(2)}
          </span>
        </div>
      </div>

      <section className='flex flex-col mx-auto w-full gap-10'>
        <div className='flex flex-col mx-auto w-full max-w-85 sm:max-w-full gap-10 md:flex-row justify-center'>
          {/* table dollars */}
          <section className='flex flex-col gap-1'>
            <div className='flex justify-between w-full max-w-85 px-3 py-2 mx-auto bg-neutral-300 dark:bg-neutral-500 rounded-2xl'>
              <span className='font-bold'>Dollars</span>
              <button
                onClick={() => resetDollars()}>
                <img className='h-7 w-9 rounded-xl p-1 hover:bg-neutral-400' src={ClearIcon.src} alt="Clear" />
              </button>
            </div>

            <table className='table w-full max-w-85 sm:w-85 mx-auto bg-neutral-600 rounded-2xl'>
              <thead>
                <tr className='flex bg-neutral-300 dark:bg-neutral-500 px-3 py-1 rounded-t-xl'>
                  <th className='font-bold text-right w-2/20'>Unit</th>
                  <th className='font-bold text-right w-9/20'>Quantity</th>
                  <th className='font-bold text-right w-9/20'>Total C$</th>
                </tr>
              </thead>
              <tbody>
                {dollars.map((bill, index) =>
                  <tr
                    key={bill.value}
                    className='flex border-b-1 border-neutral-300 dark:border-neutral-500 px-3 py-1 bg-neutral-200 dark:bg-neutral-600'
                  >
                    <td className='text-right w-2/20'>{bill.value < 1 ? (bill.value).toFixed(2) : bill.value}</td>
                    <td className='w-9/20'>
                      <input
                        type="number"
                        className='text-right w-full focus-visible:outline-0'
                        value={bill.quantity}
                        min={0}
                        placeholder='-'
                        onChange={(event) => handleDollars(index, event.target.valueAsNumber)}
                      />
                    </td>
                    <td className='text-right w-9/20'>
                      {bill.subtotal === 0 ? '-' : (bill.subtotal).toFixed(2)}
                    </td>
                  </tr>
                )}
              </tbody>
              <tfoot>
                <tr className='flex py-1 px-3 bg-neutral-300 dark:bg-neutral-500 rounded-b-xl'>
                  <th className='font-bold text-right w-2/20'>Total</th>
                  <th className='font-bold text-right w-9/20'>$ {dollarsQuantity === 0 ? '-' : dollarsQuantity.toFixed(2)}</th>
                  <th className='font-bold text-right w-9/20'>C$ {dollarsTotal === 0 ? '-' : dollarsTotal.toFixed(2)}</th>
                </tr>
              </tfoot>
            </table>
          </section>

          {/* table cordobas */}
          <section className='flex flex-col gap-1'>
          <div className='flex justify-between w-full max-w-85 px-3 py-2 mx-auto bg-neutral-300 dark:bg-neutral-500 rounded-2xl'>
              <span className='font-bold'>Córdobas</span>
              <button
                onClick={() => resetCordobas()}>
                <img className='h-7 w-9 rounded-xl p-1 hover:bg-neutral-400' src={ClearIcon.src} alt="Clear" />
              </button>
            </div>
            
            <table className='table w-full max-w-85 sm:w-85 mx-auto bg-neutral-600 rounded-2xl'>
              <thead>
                <tr className='flex bg-neutral-300 dark:bg-neutral-500 px-3 py-1 rounded-t-xl'>
                  <th className='font-bold text-right w-2/20'>Unit</th>
                  <th className='font-bold text-right w-9/20'>Quantity</th>
                  <th className='font-bold text-right w-9/20'>Total C$</th>
                </tr>
              </thead>
              <tbody>
                {cordobas.map((bill, index) =>
                  <tr
                    key={bill.value}
                    className='flex border-b-1 border-neutral-300 dark:border-neutral-500 px-3 py-1 bg-neutral-200 dark:bg-neutral-600'
                  >
                    <td className='text-right w-2/20'>{bill.value < 1 ? (bill.value).toFixed(2) : bill.value}</td>
                    <td className='w-9/20'>
                      <input
                        type="number"
                        className='text-right w-full focus-visible:outline-0'
                        value={bill.quantity}
                        placeholder='-'
                        min={0}
                        onChange={(event) => handleCordobas(index, event.target.valueAsNumber)}
                      />
                    </td>
                    <td className='text-right w-9/20'>
                      {bill.subtotal === 0 ? '-' : (bill.subtotal).toFixed(2)}
                    </td>
                  </tr>
                )}
              </tbody>
              <tfoot>
                <tr className='flex py-1 px-3 bg-neutral-300 dark:bg-neutral-500 rounded-b-xl'>
                  <th className='font-bold text-right w-2/20'>Total</th>
                  <th className='font-bold text-right w-9/20'>$ {cordobasInDollars === 0 ? '-' : cordobasInDollars.toFixed(2)}</th>
                  <th className='font-bold text-right w-9/20'>C$ {cordobasTotal === 0 ? '-' : cordobasTotal.toFixed(2)}</th>
                </tr>
              </tfoot>
            </table>
          </section>
        </div>

        {/* General total */}
        <section className='flex flex-col w-full max-w-85 gap-1 mx-auto'>
          <div className='flex justify-center w-full px-3 py-2.5 mx-auto bg-neutral-300 dark:bg-neutral-500 rounded-2xl'>
            <span className='font-bold'>General total</span>
          </div>

          <div className='flex flex-col w-full'>
            <div className='flex justify-around w-full bg-neutral-300 dark:bg-neutral-500 py-1 rounded-t-xl'>
              <span className='text-center font-bold'>Dollars</span>
              <span className='text-center font-bold'>Córdobas</span>
            </div>
            <div className='flex justify-around w-full bg-neutral-200 dark:bg-neutral-600 py-1 rounded-b-xl'>
              <span className='text-center font-bold'>$ {dollarsGeneralTotal === 0 ? '-' : dollarsGeneralTotal.toFixed(2)}</span>
              <span className='text-center font-bold'>C$ {cordobaGeneralTotal === 0 ? '-' : cordobaGeneralTotal.toFixed(2)}</span>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export { MoneyCounter };