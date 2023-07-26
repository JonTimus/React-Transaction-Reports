import React, { useContext, useEffect, useState } from "react";
import { getCustomerById } from "../../api/customerAPI";
import Table from "../../components/TableRewards/Table";
import { TransactionContext } from "../../context/TransactionContext";
import { calcRewardFromTrans } from "../../util/calcRewards";
import { MONTHS } from "../../util/date";
import { formatAmount } from "../../util/format";
import { getCustomerIDs, getMonthIndices } from "../../util/transactionUtil";
import "../Table.css";

export default function RewardPage() {
  const { transactions, customers, setCustomers } = useContext(
    TransactionContext
  );

  useEffect(() => {
    const customerIDs = getCustomerIDs(transactions);
    Promise.all(customerIDs.map((id) => getCustomerById(id))).then(
      setCustomers
    );
  }, [transactions]);

  const [query, setQuery] = useState("");

  const monthIndices = getMonthIndices(transactions);

  //calculate rewards info based on customer data
  const cusRewards = customers.map((cus) => {
    let rewards = [];
    let total = 0;
    monthIndices.forEach((monIndex) => {
      const month = MONTHS[monIndex];
      // console.log(month);
      const currMonthTrans = transactions.filter(
        (trans) =>
          monIndex === new Date(trans.timestamp).getUTCMonth() &&
          cus.id === trans.customerId
      );
      // console.log(currMonthTrans);

      const monthReward = calcRewardFromTrans(currMonthTrans);
      rewards[month] = formatAmount(monthReward);
      total += monthReward;
    });

    return {
      id: cus.id,
      name: cus.name,
      ...rewards,
      total: formatAmount(total)
    };
  });

  const columns = [
    { header: "ID", accessor: "id", isKey: true },
    { header: "Name", accessor: "name" },
    ...monthIndices.map((monIndex) => ({
      header: MONTHS[monIndex],
      accessor: MONTHS[monIndex]
    })),
    { header: "Total", accessor: "total" }
  ];

  return (
    <div id="rewardPage">
      {" "}
      {/* Apply the CSS class */}
      <label>
        Search:&nbsp;
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <Table data={cusRewards} columns={columns} />
    </div>
  );
}
