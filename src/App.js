import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date("2020, 7, 14"),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date("2021, 2, 28"),
  },
  {
    id: "e3",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date("2021, 5, 12"),
  },
  {
    id: "e4",
    title: "Rosh's Bday",
    amount: 690,
    date: new Date("2022, 12, 15"),
  },
];
function App(props) {
 
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    })
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
