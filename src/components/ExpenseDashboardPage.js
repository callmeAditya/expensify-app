import React from 'react'
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilter'

const ExpenseDashboardPage=(props)=>{
    console.log(props);
    return(
    <div>
    <ExpenseListFilters/>
    <ExpenseList/>
    </div>
    )
};

export default ExpenseDashboardPage