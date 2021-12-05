import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import  selectexpenses  from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        <h1>Expense List
        </h1>
    
        {props.expenses.map((ele) => {
            return <ExpenseListItem key={ele.id} {...ele} />
        })}
       
    </div>

)

const mapstatetoprops = (state) => {
    console.log(state.expenses);
//   console.log(selectexpenses(state.expenses,state.filter));
    return {
        
        expenses: selectexpenses(state.expenses, state.filter),
        // expense: state.expenses,
        // filter: state.filter

    }

}

const ExpensesListConnected = connect(mapstatetoprops)(ExpenseList)
export default ExpensesListConnected