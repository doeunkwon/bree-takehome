import { useState, useEffect } from "react";
import { Transaction } from "../types/Transaction";
import TransactionCard from "./TransactionCard";
import "../styles/TransactionList.css";
import "../styles/Panel.css";

function TransactionList({ transactions }: { transactions: Transaction[] }) {
  const [transactionList, setTransactionList] =
    useState<Transaction[]>(transactions);
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    const filteredTransactions = transactions.filter((transaction) => {
      if (filter === "All") return true;
      return transaction.status === filter;
    });
    setTransactionList(filteredTransactions);
  }, [filter, transactions]);

  return (
    <main
      className="panel"
      style={{
        paddingBottom: "0px",
        paddingLeft: "0px",
        paddingRight: "0px",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <div className="transaction-list-buttons">
        <button
          className="button-secondary"
          style={{ boxShadow: "var(--box-shadow)", width: "100%" }}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className="button-secondary"
          style={{ boxShadow: "var(--box-shadow)", width: "100%" }}
          onClick={() => setFilter("Pending")}
        >
          Pending
        </button>
        <button
          className="button-secondary"
          style={{ boxShadow: "var(--box-shadow)", width: "100%" }}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>
      </div>
      <section
        className="transaction-list"
        style={{ borderTop: "3px solid white" }}
      >
        {transactionList.map((transaction: Transaction, index: number) => (
          <div key={index}>
            <TransactionCard
              id={transaction.id}
              date={transaction.date}
              type={transaction.type}
              amount={transaction.amount}
              status={transaction.status}
              repaymentDate={transaction.repaymentDate}
            />
          </div>
        ))}
      </section>
    </main>
  );
}

export default TransactionList;
