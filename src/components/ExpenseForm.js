import React from 'react'
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'
const moment = require('moment')


const now = moment()
console.log(now.format('MMM Do'));

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            description:props.expense ? props.expense.description : '',
            details: props.expense? props.expense.details:'',
            amount: props.expense? (props.expense.amount).toString():'',
            createdAt: props.expense?moment(props.expense.createdAt): moment(),
            calendarFocused: false
        }
    }


    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    onDetailsChange = (e) => {
        // const details=e.target.value
        e.persist()
        this.setState(() => ({ details: e.target.value }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }
    onFocusChange = ({ focused }) => {//destructring
        this.setState(() => ({ calendarFocused: focused }))
    }

    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description || !this.state.amount) {
            alert('Error! Please provide description or amount')
        } else {
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),// in ms,
                details: this.state.details
            })
        }
    }
    render() {
        // console.log(now);
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="description"
                        value={this.state.description}
                        autoFocus
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => { false }}
                    />

                    <textarea
                        placeholder="details (optional)"
                        value={this.state.details}
                        onChange={this.onDetailsChange}
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}