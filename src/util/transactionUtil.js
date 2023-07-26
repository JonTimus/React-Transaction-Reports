// import { MONTHS } from "./date";

export const getMonthIndices = (transactions) => {
  const months = transactions.map((trans) => {
    return new Date(trans.timestamp).getUTCMonth();
  });
  const uniqueMonths = [...new Set(months)];
  return uniqueMonths.sort((a, b) => a - b);
};

export const getCustomerIDs = (transactions) => {
  const customers = transactions.map((trans) => {
    return trans.customerId;
  });
  return [...new Set(customers)];
};
