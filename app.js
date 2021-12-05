
import validator from 'validator'

// import './src/styles/styles.scss'
import React from 'react'
import configureStore  from './src/stores/configureStore'
import getVisibleExpenses from './src/selectors/expenses'
import { addExpense } from './src/actions/expenses'
import {setTextValue} from './src/actions/filters'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import './node_modules/normalize.css/'
import './src/styles/styles.scss'
import AppRouter from './src/routers/AppRouter'
import './src/firebase/firebase'
import App from './playground/test'

// console.log(validator.isEmail('test'))
// const templ = <p>Hello jsx</p>
// // const templ=React.createElement('p',{},'hello jsx')
// ReactDOM.render(templ, document.getElementById('app'))


const store= configureStore()
// store.subscribe(() => {
  
   

// })


const expense1= store.dispatch(addExpense({description: 'Water Bill', amount: 1000, startdate:100, endDate:100, createdAt:200 }))
const expense2= store.dispatch(addExpense({description: 'Gas Bill', amount: 350, startdate:189, endDate:255, createdAt:389 }))

// store.dispatch(setTextValue('bill'))
// setTimeout(function(){
// store.dispatch(setTextValue('water'))
// },2000)
// console.log( (store.getState()))


const state=store.getState()
const visibleExpenses=getVisibleExpenses(state.expenses, state.filter)

console.log(visibleExpenses);


const jsx=(
    <Provider store={store}>
    <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
