const { v4: uuid } = require('uuid');


// add expense
export const addExpense = ({
    description = '',
    details = '',
    amount = 0,
    createdAt = 0
} = {}
) => ({
    type: 'Add_Expense',
    expenses: {
        id: uuid(),
        description,
        details,
        amount,
        createdAt
    }
})

export const startAddExpense=(expenseData={})=>{ // return object for Add_Expense for firebase
    return (dispatch)=>{
            const {
                description = '',
                details = '',
                amount = 0,
                createdAt = 0
            }=expenseData
    }
}

//remove
export const removeExpense = ({ id } = {}) => ({
    type: 'Remove_Expense',
    id

})


//edit
export const editExpense = (id, updates) => ({
    type: 'Edit_Expense',
    id,
    updates
})
