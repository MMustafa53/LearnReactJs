import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (data) => {
        const expenseData = {
            ...data,
            id:Math.random().toString()
        };
        props.addExpenses(expenseData)
    }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} callSetOpen={props.callSetOpen}/>
    </div>
  );
};

export default NewExpense;
