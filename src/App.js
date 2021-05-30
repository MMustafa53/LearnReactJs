import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import ExpenseControl from './components/Expenses/ExpenseControl';
import './components/NewExpense/NewExpense.css';
import AddUser from "./components/User/Users/AddUser";
import UsersLists from "./components/User/Users/UsersLists";
const App = () => {
    const [show, setShow] = useState(false)
    const [users, setUsers] = useState([])
    const [expenses, setExpenses] = useState([
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ]);

    const [open, setOpen] = useState(false);

    // return React.createElement(
    //   'div',
    //   {},
    //   React.createElement('h2', {}, "Let's get started!"),
    //   React.createElement(Expenses, { items: expenses })
    // );

    const addExpenseHandler = (expenseData) => {
        setExpenses(prevState => ([
                expenseData, ...prevState
            ]
        ))
    }
    const callSetOpen = () => {
        setOpen(!open)
    }
    const getusersHandler = (data) => {
        setUsers([...users, ...data])
    }
    return (
        (show ?
                (<div>
                    {open ?
                        (<NewExpense addExpenses={addExpenseHandler} callSetOpen={callSetOpen}/>)
                        : <ExpenseControl callSetOpen={callSetOpen}/>}
                    <Expenses items={expenses}/>
                    <div className='new-expense'>
                        <button onClick={() => setShow(!show)}> CHANGE PAGE</button>
                    </div>
                </div>) :
                (
                    // <div className='new-expense'>
                    <div>
                        <AddUser getUser={getusersHandler}/>
                        <UsersLists users={users}/>
                        <button onClick={() => setShow(!show)}> CHANGE PAGE</button>
                    </div>)
        )


    );
}

export default App;
