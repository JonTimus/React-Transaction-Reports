import { transactionsData } from "./transactionAPI";

const customersData = [
  {
    id: 1,
    name: "John Smith"
  },
  {
    id: 2,
    name: "Jane Doe"
  },
  {
    id: 3,
    name: "Bob Johnson"
  },
  {
    id: 4,
    name: "Sarah Lee"
  }
];

export const getCustomerById = async (id) => {
  const customer = customersData.find((cus) => cus.id === id);
  if (customer === undefined) {
    throw new Error("customer not found");
  }

  const transactions = transactionsData.filter((trans) => {
    return trans.customerId === id;
  });

  return {
    ...customer,
    transactions
  };
};
