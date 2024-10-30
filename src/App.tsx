import "./styles/App.css";
import Balance from "./components/Balance";
import { useState, useEffect } from "react";
import TransactionList from "./components/TransactionList";
import { transactions } from "./mocks/transactions";
import "./styles/Modal.css";
import "./styles/Panel.css";
import RequestModal from "./components/RequestModal";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cashAmount, setCashAmount] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const limit = 350;
  const minAmount = 20;

  const handleCashAdvanceRequest = () => {
    if (isNaN(cashAmount) || cashAmount > limit || cashAmount < minAmount) {
      setMessage(
        `Please enter a valid amount between $${minAmount} and $${limit}.`
      );
      setIsError(true);
      setShowBanner(true);
      return;
    }

    console.log("Requested cash amount:", cashAmount);
    setMessage(
      `You have requested $${cashAmount}. It will be processed shortly.`
    );
    setIsError(false);
    setCashAmount(0);
    setIsOpen(false);
    setShowBanner(true);
  };

  useEffect(() => {
    if (showBanner) {
      const timer = setTimeout(() => {
        setShowBanner(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showBanner]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <main className="App">
      <section className="app-container">
        {showBanner && (
          <div className={`app-banner ${isError ? "error" : "success"}`}>
            {message}
          </div>
        )}
        <div className="app-main">
          <Balance remaining={limit} />
          <button className="button-primary" onClick={() => setIsOpen(!isOpen)}>
            Request a Cash Advance
          </button>
        </div>
        <TransactionList transactions={transactions} />
        {isOpen && (
          <RequestModal
            cashAmount={cashAmount}
            setCashAmount={setCashAmount}
            handleCashAdvanceRequest={handleCashAdvanceRequest}
            handleOverlayClick={handleOverlayClick}
          />
        )}
      </section>
    </main>
  );
}

export default App;
