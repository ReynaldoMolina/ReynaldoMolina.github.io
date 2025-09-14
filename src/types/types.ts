export type StateBool = boolean;
export type StateSet = React.Dispatch<React.SetStateAction<boolean>>;
export type Children = React.ReactNode;

export interface Skill {
  name: string;
  icon: string;
}

export type Quantity = number | string;

export interface Bill {
  value: number;
  quantity: Quantity;
  subtotal: number;
  coin: boolean;
}

export type MoneyType = "dollar" | "cordoba";

export interface QuantityProps {
  index: number;
  quantity: Quantity;
  moneyType: MoneyType;
}

export interface ExchangeRateProps {
  exchangeRate: Quantity;
  updateExchange: (rate: number) => void;
  toCount: Quantity;
  setToCount: React.Dispatch<React.SetStateAction<Quantity>>;
  difference: number;
  saveToLocalStorage: () => void;
}

export interface ExchangeInputProps {
  value: Quantity;
  setValue: (rate: number) => void;
  placeholder: string;
}

export interface TableProps {
  moneyType: MoneyType;
  resetQuantities: (moneyType: MoneyType) => void;
  money: Bill[];
  updateQuantity: ({ index, quantity, moneyType }: QuantityProps) => void;
  totalQuantity: number;
  total: number;
}
