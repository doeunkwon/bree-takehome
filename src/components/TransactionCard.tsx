import { TransactionStatus } from "../types/TransactionStatus";
import "../styles/TransactionCard.css";
import "../styles/Panel.css";
import { Transaction } from "../types/Transaction";

function TransactionCard({
  id,
  date,
  type,
  amount,
  status,
  repaymentDate,
}: Transaction) {
  const tooltipText = `ID: ${id}\nDate: ${date}\nType: ${type}\nAmount: $${amount}\nStatus: ${status}${
    repaymentDate ? `\nRepayment Date: ${repaymentDate}` : ""
  }`;

  return (
    <main
      className="panel"
      style={{
        boxShadow: "var(--box-shadow)",
        margin: "var(--padding-medium)",
        padding: "var(--padding-large)",
        width: "calc(150px + 5vw)",
        boxSizing: "border-box",
      }}
      title={tooltipText}
    >
      <div>
        <section className="transaction-card-header">
          <h4
            style={{
              color:
                status === TransactionStatus.Completed
                  ? "var(--color-dark-green)"
                  : "var(--color-light-red)",
            }}
          >
            {status}
          </h4>
          <section className="transaction-card-amount">
            <h3>$</h3>
            <h2>{amount}</h2>
          </section>
          <p style={{ color: "gray", textAlign: "center" }}>
            {type} on
            <br />
            {date}
          </p>
        </section>
      </div>
    </main>
  );
}
export default TransactionCard;
