import React, {useState} from 'react';

import '../NewExpense/ExpenseForm.css';

const ExpenseControl = (props) => {

    return (
        <form onSubmit={props.callSetOpen} className='new-expense'>
            <div >
                <button type='submit'>Add New Expense</button>
            </div>
        </form>
    );
};

export default ExpenseControl;
