import './ExpenseItem.css'
function ExpenseItem(props) {
    const expenseDate = new Date(2022, 12, 30);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 40.07;

    return(
        <div className='expense-item'>
            <div> {props.date.toISOString}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;