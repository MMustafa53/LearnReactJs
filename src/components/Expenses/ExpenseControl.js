import React, {useState} from 'react';

import '../NewExpense/ExpenseForm.css';

const ExpenseControl = (props) => {

    // type submit olan butonda onClick yerine formda onSubmit kullanmak daha iyidir
    return (
        <form onSubmit={props.callSetOpen} className='new-expense'>
            <div >
                <button type='submit'>Add New Expense</button>
            </div>
        </form>
    );
};

export default ExpenseControl;
