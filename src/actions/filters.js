

//set text filter
export const setTextValue = (text='') => ({
    type: 'Set_TextValue',
    text
})


//sortByAmount
export const sortByAmount=()=>({
    type:'Sort_ByAmount'
})

//sortByDate
export const sortByDate=()=>({
    type:'Sort_ByDate'
})

//setStartDate

export const setStartDate=(date=undefined)=>({
    type:'Set_StartDate',
    date
})

//setEndDate

export const setEndDate=(date=undefined)=>({
    type:'Set_EndDate',
    date
})