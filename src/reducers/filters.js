import moment from "moment"


const filterdefault = {
    text: '',
    sortBy: 'amount',
    amountBy:0,
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
}




//create filter

const expensesfilter = (state = filterdefault, action) => {
    switch (action.type) {

        case 'Set_TextValue': return {
            ...state,
            text:action.text
        }

        case 'Sort_ByDate': return{
            ...state,
            sortBy:action.sortBy
        }

        case 'Sort_ByAmount': return{
            ...state,
            amountBy:action.sortBy
        }

        case 'Set_StartDate':return{
            ...state,
            startDate:action.date
        }

        case 'Set_EndDate': return {
            ...state,
            endDate:action.date
        }

        default:
            return state
    }
}

export default expensesfilter
