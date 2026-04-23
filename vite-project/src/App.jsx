import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function App() {
  const [totalBalance, setTotalBalance] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);

  function buttonHandler() {
    const typeOfTransaction = document.getElementById("typeOfTransaction").value;
    const amount = Number(document.getElementById("amountEntered").value);

    if (typeOfTransaction === "expense") {
      setTotalBalance(totalBalance - amount);
      setTotalExpense(totalExpense + amount);
    } else if (typeOfTransaction === "income") {
      setTotalBalance(totalBalance + amount);
      setTotalIncome(totalIncome + amount);
    } else if (typeOfTransaction === "savings") {
      setTotalBalance(totalBalance + amount);
      setTotalSavings(totalSavings + amount);
    }
  }

  const data = [
    { name: "Income", value: totalIncome },
    { name: "Expense", value: totalExpense },
    { name: "Savings", value: totalSavings }
  ];

  return (
    <div>
      <nav><h1>Finance Tracker</h1></nav>

      <div>
        <label>Type:</label>
        <select id="typeOfTransaction">
          <option value="expense">Expense</option>
          <option value="income">Income</option>
          <option value="savings">Savings</option>
        </select>

        <input type="text" placeholder="Enter Amount" id="amountEntered" />
        <button onClick={buttonHandler}>Add Transaction</button>
      </div>

      <div>
        <h3>Summary</h3>
        <p>Net Balance: ${totalBalance}</p>
        <p>Income: ${totalIncome}</p>
        <p>Expense: ${totalExpense}</p>
        <p>Savings: ${totalSavings}</p>
      </div>

      
      <h3>Financial Overview</h3>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" />
      </BarChart>
    </div>
  );
}

export default App;