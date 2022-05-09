import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpensehandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]; //Fix the bug when the new expense is first
    });
  };

  console.log(DUMMY_EXPENSES);

  return (
    <div>
      <NewExpense onAddExpense={addExpensehandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
