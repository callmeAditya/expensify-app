import {addExpense, removeExpense,editExpense} from '../../src/actions/expenses'
import expenses from '../../src/selectors/expenses'
//toEqual for arrays and objects; below code won't work for .toBe()
test('shud remove expenses',()=>{
    const action= removeExpense({id:'123abc'})
    expect(action).toEqual({
        type:'Remove_Expense',
        id:'123abc'
    })
})


test('shud edit expense', ()=>{
    const action= editExpense('123abc', { description:'coffee'})
    expect(action).toEqual({
        type: 'Edit_Expense',
        id:'123abc',
        updates:{
            description:'coffee'
        }
    })
})


test('shud add expense with added values ',()=>{

    const expensedata= {
  
        description:'Rent',
        details:'june',
        amount:'1235',
        createdAt:1000
    }

    const action= addExpense(expensedata)

    expect(action).toEqual({
        type: 'Add_Expense',
      expenses:{
          ...expensedata,
          id:expect.any(String)
      }
    })
})

test('shud add with default values',()=>{
    const expensedata= {
        
        description:'',
        details:'',
        amount:0,
        createdAt:0
    }
    const action= addExpense()

    expect(action).toEqual({
        type: 'Add_Expense',
        expenses: {
            ...expensedata,
            id:expect.any(String)
        }
    })
})