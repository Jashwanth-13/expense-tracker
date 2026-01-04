let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const list = document.getElementById("list");
const balance = document.getElementById("balance");

function updateUI() {
  list.innerHTML = "";
  let total = 0;

  transactions.forEach((t, index) => {
    total += t.amount;

    const li = document.createElement("li");
    li.innerHTML = `
      ${t.text} (${t.category})
      <span>₹${t.amount}</span>
    `;
    list.appendChild(li);
  });

  balance.innerText = total;
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

document.getElementById("transaction-form").addEventListener("submit", e => {
  e.preventDefault();

  const text = document.getElementById("text").value;
  const amount = +document.getElementById("amount").value;
  const category = document.getElementById("category").value;

  transactions.push({ text, amount, category });
  updateUI();
  e.target.reset();
});

updateUI();
