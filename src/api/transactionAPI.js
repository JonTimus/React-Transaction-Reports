export const transactionsData = [
  { id: 1, amount: 898, timestamp: 1680307200000, customerId: 1 },
  { id: 2, amount: 130, timestamp: 1680480000000, customerId: 2 },
  { id: 3, amount: 898, timestamp: 1680652800000, customerId: 3 },
  { id: 4, amount: 233, timestamp: 1680912000000, customerId: 4 },
  { id: 5, amount: 704, timestamp: 1681084800000, customerId: 1 },
  { id: 6, amount: 288, timestamp: 1681344000000, customerId: 2 },
  { id: 7, amount: 651, timestamp: 1681516800000, customerId: 3 },
  { id: 8, amount: 217, timestamp: 1681776000000, customerId: 4 },
  { id: 9, amount: 507, timestamp: 1681948800000, customerId: 1 },
  {
    id: 10,
    amount: 456,
    timestamp: 1682208000000,
    customerId: 2
  },
  {
    id: 11,
    amount: 773,
    timestamp: 1682380800000,
    customerId: 3
  },
  {
    id: 12,
    amount: 217,
    timestamp: 1682640000000,
    customerId: 4
  },
  {
    id: 13,
    amount: 975,
    timestamp: 1682899200000,
    customerId: 1
  },
  {
    id: 14,
    amount: 422,
    timestamp: 1683158400000,
    customerId: 2
  },
  {
    id: 15,
    amount: 828,
    timestamp: 1683331200000,
    customerId: 3
  },
  {
    id: 16,
    amount: 236,
    timestamp: 1683676800000,
    customerId: 4
  },
  {
    id: 17,
    amount: 707,
    timestamp: 1683936000000,
    customerId: 1
  },
  { id: 18, amount: 34, timestamp: 1684195200000, customerId: 2 },
  { id: 19, amount: 61, timestamp: 1684454400000, customerId: 3 },
  {
    id: 20,
    amount: 340,
    timestamp: 1684713600000,
    customerId: 4
  },
  {
    id: 21,
    amount: 420,
    timestamp: 1684972800000,
    customerId: 1
  },
  {
    id: 22,
    amount: 146,
    timestamp: 1685232000000,
    customerId: 2
  },
  {
    id: 23,
    amount: 174,
    timestamp: 1685491200000,
    customerId: 3
  },
  {
    id: 24,
    amount: 469,
    timestamp: 1685750400000,
    customerId: 4
  },
  {
    id: 25,
    amount: 316,
    timestamp: 1686009600000,
    customerId: 1
  },
  {
    id: 26,
    amount: 811,
    timestamp: 1686268800000,
    customerId: 2
  },
  {
    id: 27,
    amount: 620,
    timestamp: 1686528000000,
    customerId: 3
  },
  {
    id: 28,
    amount: 365,
    timestamp: 1686787200000,
    customerId: 4
  },
  {
    id: 29,
    amount: 802,
    timestamp: 1687046400000,
    customerId: 1
  },
  {
    id: 30,
    amount: 290,
    timestamp: 1687305600000,
    customerId: 2
  },
  {
    id: 31,
    amount: 187,
    timestamp: 1687564800000,
    customerId: 3
  },
  {
    id: 32,
    amount: 555,
    timestamp: 1687824000000,
    customerId: 4
  },
  {
    id: 33,
    amount: 980,
    timestamp: 1685577600000,
    customerId: 1
  },
  {
    id: 34,
    amount: 123,
    timestamp: 1685836800000,
    customerId: 2
  },
  {
    id: 35,
    amount: 721,
    timestamp: 1686009600000,
    customerId: 3
  },
  {
    id: 36,
    amount: 294,
    timestamp: 1686355200000,
    customerId: 4
  },
  {
    id: 37,
    amount: 609,
    timestamp: 1686614400000,
    customerId: 1
  },
  {
    id: 38,
    amount: 844,
    timestamp: 1686873600000,
    customerId: 2
  },
  {
    id: 39,
    amount: 180,
    timestamp: 1687132800000,
    customerId: 3
  },
  {
    id: 40,
    amount: 522,
    timestamp: 1687392000000,
    customerId: 4
  }
];

export const getTransactions = async () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(transactionsData);
    }, 1000);
  });
  return transactionsData;
};
