import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App(props) {
  const expenses = [
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
  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
