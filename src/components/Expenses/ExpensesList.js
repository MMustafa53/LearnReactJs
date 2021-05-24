import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = props => {
    if (props.items.filter(item => item.date.getFullYear().toString() === props.year).length === 0){
        return <h2 className="expenses-list__fallback"> Found no expenses!!</h2>
    }
    return (
        props.items.filter(item => item.date.getFullYear().toString() === props.year).map(item => {
            return (
                <ul className='expenses-list'>
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                </ul>

            )
        })
    )
}

export default ExpensesList