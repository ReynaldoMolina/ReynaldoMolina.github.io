import { createContext, useContext } from 'react';
import { useMoneyCounter } from './use-money-counter';

type MoneyCounterContextType = ReturnType<typeof useMoneyCounter>;

const MoneyCounterContext = createContext<MoneyCounterContextType | undefined>(
  undefined
);

export function MoneyCounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const moneyCounterData = useMoneyCounter();

  return (
    <MoneyCounterContext.Provider value={moneyCounterData}>
      {children}
    </MoneyCounterContext.Provider>
  );
}

export function useMoneyCounterContext(): MoneyCounterContextType {
  const context = useContext(MoneyCounterContext);
  if (!context) {
    throw new Error(
      'useMoneyCounterContext must be used inside a MoneyCounterProvider'
    );
  }
  return context;
}
