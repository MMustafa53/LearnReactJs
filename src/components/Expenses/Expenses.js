import React, { useState } from 'react';

import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [year, setYear] = useState('2020')
    const changeFilterYear = selectedYear => {
        setYear(selectedYear)
    }
    const filteredSelect = props.items.filter(item => item.date.getFullYear().toString() === props.year)
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter year={year} onYear={changeFilterYear}/>
                <ExpensesList items={props.items} year={year}/> {/*items={filteredSelect}*/}
            </Card>
        </div>
    );
}

export default Expenses;
