import moment from "moment"


//get visible data
//unix epoch 1st Jan 1970

export default (expenses, {text, sortBy, startDate, endDate})=>{
    return expenses.filter((expense)=>{
        // const textMatch=true
        const createdAtMoment=moment(expense.createdAt)
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        // const startDateMatch= typeof startDate!=='number' || expense.createdAt>=startDate
        // const endDateMatch= typeof endDate!=='number' || expense.createdAt<=endDate

        //L-110-filtering dates
        const startDateMatch= startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') :true
        const endDateMatch= endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'):true
    
        return textMatch && startDateMatch && endDateMatch
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt<b.createdAt?1:-1
        }
    
       else if(sortBy==='amount'){
            return a.amount<b.amount?1:-1
        }
    })
    }

    // export default getVisibleExpenses