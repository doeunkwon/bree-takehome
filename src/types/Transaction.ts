import { TransactionStatus } from "./TransactionStatus";
import { TransactionType } from "./TransactionType";

export interface Transaction {
    id: string;
    date: string;
    type: TransactionType;
    amount: number;
    status: TransactionStatus;
    repaymentDate?: string;
}