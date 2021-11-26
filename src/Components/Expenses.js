import ExpenseItem from "./ExpenseItem";
const Expenses = (props) => {

  return (
    <div>
        {props.expenses.map((expense) => {
            return(<ExpenseItem
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
            />);
    })} 
    </div>
  );
};

export default Expenses;
