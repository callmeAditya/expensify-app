import React from 'react'
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const CreateDashboardPage=(props)=>{
    console.log(props.expenses);
    return(
    <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
    onSubmit={(expenses)=>{
    
        console.log(expenses)
        props.dispatch(addExpense(expenses))
        props.history.push('/') //redirect to dashboard L 107
    }}
    />
    </div>
    )
};

export default connect()(CreateDashboardPage)