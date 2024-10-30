import { Transaction } from "../types/Transaction"
import { TransactionStatus } from "../types/TransactionStatus"
import { TransactionType } from "../types/TransactionType"

export const transactions: Transaction[] = [
    {
        id: "1",
        date: "Oct 28, 2024",
        type: TransactionType.Repaid,
        amount: 40,
        status: TransactionStatus.Pending,
        repaymentDate: "Nov 28, 2024"
    },
    {
        id: "2",
        date: "Oct 17, 2024",
        type: TransactionType.Advanced,
        amount: 25,
        status: TransactionStatus.Completed
    },
    {
        id: "3",
        date: "Oct 13, 2024",
        type: TransactionType.Repaid,
        amount: 50,
        status: TransactionStatus.Completed,
        repaymentDate: "Nov 13, 2024"
    },
    {
        id: "4",
        date: "Oct 5, 2024",
        type: TransactionType.Advanced,
        amount: 90,
        status: TransactionStatus.Completed
    },
    {
        id: "5",
        date: "Oct 1, 2024",
        type: TransactionType.Advanced,
        amount: 25,
        status: TransactionStatus.Completed
    }
]