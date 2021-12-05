import moment from 'moment'
import { setTextValue, setStartDate, setEndDate, sortByAmount, sortByDate } from '../../src/actions/filters'



test('shud set startdate', () => {
    const filter = setStartDate(moment(0))

    expect(filter).toEqual({

        type: 'Set_StartDate',
        date: moment(0)
    })
})




test('shud set enddate', () => {
    const filter = setEndDate(moment(0))

    expect(filter).toEqual({

        type: 'Set_EndDate',
        date: moment(0)
    })
})


test('shud put textfilter', () => {
    const filter = setTextValue('')

    expect(filter).toEqual({
        type: 'Set_TextValue',
        text: expect.any(String)
    })
})


test('shud sort by amount',()=>{
    const filter=sortByAmount()
    expect(filter).toEqual({
        type:'Sort_ByAmount'
    })
})

test('shud sort by date',()=>{
    const filter=sortByDate()
    expect(filter).toEqual({
        type:'Sort_ByDate'
    })
})