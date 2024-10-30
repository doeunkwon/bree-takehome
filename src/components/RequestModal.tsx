import React from "react";

interface RequestModalProps {
  cashAmount: number;
  setCashAmount: (amount: number) => void;
  handleCashAdvanceRequest: () => void;
  handleOverlayClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function RequestModal({
  cashAmount,
  setCashAmount,
  handleCashAdvanceRequest,
  handleOverlayClick,
}: RequestModalProps) {
  return (
    <section className="modal-overlay" onClick={handleOverlayClick}>
      <section className="panel">
        <h3 style={{ textAlign: "center" }}>How much can we help you with?</h3>
        <input
          type="number"
          value={cashAmount}
          onChange={(e) => setCashAmount(Number(e.target.value))}
          placeholder="Enter cash amount"
        />
        <button className="button-secondary" onClick={handleCashAdvanceRequest}>
          Request 🤑
        </button>
      </section>
    </section>
  );
}

export default RequestModal;
