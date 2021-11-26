import './style/ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  return (
    <div className='expenseDetails'>
      <ExpenseDate date={props.date} />
      <h2>{props.title}</h2>
      <div className='expenseAmount'>${props.amount}</div>
    </div>
  );
};

export default ExpenseItem;
