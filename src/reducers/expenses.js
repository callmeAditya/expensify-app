const defaultstate = []

const expnesesreducers = function (state = defaultstate, action) {
    switch (action.type) {
        case 'Add_Expense': return [...state, action.expenses]

        case 'Remove_Expense': return state.filter(({ id }) => id !== action.id)

        case 'Edit_Expense': return state.map((expenses) => {

            if (expenses.id === action.id) {

                return {
                    ...expenses,
                    ...action.updates
                }
            }
            else {
                return expenses
            }

        })
        
        default:
            return state
    }
}

export default expnesesreducers