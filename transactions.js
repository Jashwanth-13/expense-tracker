import { getTransactions, saveTransactions } from "./storage.js";

let transactions = getTransactions();

export function addTransaction(txn) {
  transactions.push(txn);
  saveTransactions(transactions);
}

export function deleteTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  saveTransactions(transactions);
}

export function getAllTransactions() {
  return transactions;
}
