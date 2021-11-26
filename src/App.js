import Expenses from "./Components/Expenses";
function App() {
  const expenseDetails = [
    { title: "Toilet paper", date: new Date(2020, 7, 14), amount: 250 },
    { title: "Television", date: new Date(2021, 3, 10), amount: 10000 },
    { title: "Car Insurance", date: new Date(2021, 3, 12), amount: 12500 },
    { title: "Wooden Desk", date: new Date(2021, 6, 20), amount: 1500 },
  ];
  return (
    <div>
      <Expenses expenses={expenseDetails}/>
    </div>
  );
}

export default App;

/*Expenses
ExpenseItem
ExpenseDate*/
