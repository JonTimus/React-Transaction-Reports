import React, { useContext, useEffect, useState } from "react";
import { getTransactions } from "../../api/transactionAPI";
import Table from "../../components/TableRewards/Table";
import { TransactionContext } from "../../context/TransactionContext";
import { formatAmount, formatDate } from "../../util/format";
import "../Table.css";

export default function TransactionPage() {
  const { transactions, setTransactions } = useContext(TransactionContext);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getTransactions().then((data) => {
      setTransactions(data);
    });
  }, []);

  function processTrans(transactions) {
    return transactions.map(formatTransCb).filter(filterTransCb);
  }

  function formatTransCb(trans) {
    return {
      ...trans,
      date: formatDate(trans.timestamp),
      amount: formatAmount(trans.amount)
    };
  }

  function filterTransCb(trans) {
    return trans.id.toString().includes(query);
  }

  const columns = [
    { header: "ID", accessor: "id", isKey: true },
    { header: "Date", accessor: "date" },
    { header: "Amount", accessor: "amount" },
    { header: "Customer ID", accessor: "customerId" }
  ];

  return (
    <div id="transactionPage">
      {" "}
      {/* Apply the CSS class */}
      <label>
        Search By ID:&nbsp;
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <Table data={processTrans(transactions)} columns={columns} />
    </div>
  );
}
