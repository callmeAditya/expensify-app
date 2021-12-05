import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextValue, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
//defaultValue={} to write;  value={} to only read


class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused: null,

    }
    onDatesChange = ({ startDate, endDate }) => { //react date library of objects
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    render() {
        return (
            <div>
                <label>Type a text:</label>
                <input type='text' value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextValue(e.target.value))

                    }} />
                <br />

                <label>SortBy</label>
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date') {
                            this.props.dispatch(sortByDate())
                        } else if (e.target.value === 'amount') {
                            this.props.dispatch(sortByAmount())
                        }
                    }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    isOutsideRange={()=>false}
                    showClearDates={true}
                />
            </div>
        )
    }
}

// export default ExpenseListFilter


// const ExpenseListFilter=(props)=>(
//     <div>
//     <label>Type a text:</label>
//     <input type='text' value={props.filters.text} onChange={(e)=>{    
//         props.dispatch(setTextValue(e.target.value))

//     }}/> 
//     <br/>

//     <label>SortBy</label>
//     <select
//     value={props.filters.sortBy}
//     onChange={(e)=>{
//         if(e.target.value==='date'){
//             props.dispatch(sortByDate())
//         }else if(e.target.value==='amount'){
//             props.dispatch(sortByAmount())
//         }
//     }}>
//     <option value="date">Date</option>
//     <option value="amount">Amount</option>
//     </select>
//     </div>
// )

const mapstatetoprops=(state)=>{
    return{
        filters:state.filter
    }
}

export default connect(mapstatetoprops)(ExpenseListFilter)