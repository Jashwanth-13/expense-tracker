import { addTransaction, deleteTransaction, getAllTransactions } from "./transactions.js";

const list = document.getElementById("list");
const balanceEl = document.getElementById("balance");

function render() {
  const txns = getAllTransactions();
  list.innerHTML = "";

  let balance = 0;

  txns.forEach(t => {
    balance += t.amount;

    const li = document.createElement("li");
    li.innerHTML = `
      ${t.title} (${t.category})
      <span>₹${t.amount}</span>
      <button onclick="remove('${t.id}')">❌</button>
    `;
    list.appendChild(li);
  });

  balanceEl.innerText = balance;
}

window.remove = function(id) {
  deleteTransaction(id);
  render();
};

document.getElementById("transaction-form").addEventListener("submit", e => {
  e.preventDefault();

  const txn = {
    id: "txn_" + Date.now(),
    title: text.value,
    amount: +amount.value,
    category: category.value,
    date: new Date().toISOString().split("T")[0]
  };

  addTransaction(txn);
  render();
  e.target.reset();
});

render();
