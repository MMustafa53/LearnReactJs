import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [year, setYear] = useState('2020')
    const changeFilterYear = selectedYear => {
        setYear(selectedYear)
    }
    let items = (
        props.items.filter(item => item.date.getFullYear().toString() === year).map(item => {
            return(
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                    title_change={Math.round(Math.random())}
                />
            )
        })
    );
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter year={year} onYear={changeFilterYear}/>
                {/*{items.length === 0 && <p>No items found</p>}*/}
                {items.length === 0 ? (<p>No items found</p>): items}
                {/*{items}*/}
            </Card>
        </div>
    );
}

export default Expenses;
