import { createContext, useState } from "react";

export const TransactionContext = createContext();

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  const [customers, setCustomers] = useState([]);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        setTransactions,
        customers,
        setCustomers
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
