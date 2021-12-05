// import uuid from 'uuid'

// console.log(uuid());




//create store








const expense1 = store.dispatch(addExpense({ description: 'rent', amount: 1000, startdate:100, endDate:100, createdAt:200 }))
const expense2 = store.dispatch(addExpense({ description: 'coffee', amount: 200, createdAt: 400 }))

// store.dispatch(removeExpense({ id: expense1.expenses.id }))
// store.dispatch(editExpense(expense2.expenses.id, { amount: 500 }))
// store.dispatch(setTextValue( 'ffe' ))
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

store.dispatch(setStartDate(100))
// store.dispatch(setEndDate(425))


const demoState = {
    expenses: [{
        id: 'asdasda',
        amount: 12000,
        createdAt: 0
    }],
    filters: {
        test: 'rent',
        sortBy: 'amount',
        startdate: undefined,
        enddate: undefined,
    }
}


