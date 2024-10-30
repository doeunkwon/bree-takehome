import "../styles/Panel.css";
import "../styles/Balance.css";

interface BalanceProps {
  remaining: number;
}

function Balance({ remaining }: BalanceProps) {
  return (
    <main className="panel">
      <section className="balance-remaining">
        <h4 className="balance-cash-limit">Cash Advance Balance</h4>
        <section className="balance-amount">
          <h3>$</h3>
          <h1>{remaining}</h1>
        </section>
      </section>
    </main>
  );
}

export default Balance;
