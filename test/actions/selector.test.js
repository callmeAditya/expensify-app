import moment from 'moment'
import selectExpenses from '../../src/selectors/expenses'

const Expenses=[{
    id:'123',
    description:'Gum',
    details:'',
    amount:834,
    createdAt:moment(0)
},{
    id:'124',
    description:'Rent',
    details:'',
    amount:1422,
    createdAt:moment(0).subtract(4,'days').valueOf()
},{
    id:'125',
    description:'Credit',
    details:'',
    amount:129,
    createdAt:moment(0).add(4,'days').valueOf()
}]


//text filter

test('shud filter by text value',()=>{

    const filters={
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }

    const result= selectExpenses(Expenses, filters)

    expect(result).toEqual([Expenses[2],Expenses[1]])
    
})

//startDate filter

test('shud filter by startDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result=selectExpenses(Expenses,filters)
    expect(result).toEqual([Expenses[2],Expenses[0]])
})


test('shud filter by endDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0).add(2,'days')
    }
    const result=selectExpenses(Expenses,filters)
    expect(result).toEqual([Expenses[0],Expenses[1]])
})


test('shud sort by Date',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpenses(Expenses,filters)
    expect(result).toEqual([Expenses[2],Expenses[0],Expenses[1]])
})

test('shud sort by Date',()=>{
    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpenses(Expenses,filters)
    expect(result).toEqual([Expenses[1],Expenses[0],Expenses[2]])
})