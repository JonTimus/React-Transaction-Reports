export const getPoints = (amount) => {
  let points = 0;

  if (amount > 100) {
    points += (amount - 100) * 2;
  }
  if (amount > 50 && amount <= 100) {
    points += amount - 50;
  }

  return points;
};

export const calcRewardFromTrans = (transactions) => {
  return transactions.reduce((prev, curr) => {
    return prev + getPoints(curr.amount);
  }, 0);
};
