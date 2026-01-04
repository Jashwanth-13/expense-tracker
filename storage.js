const STORAGE_KEY = "expense_tracker_transactions";

export function getTransactions() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveTransactions(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
