import { createStore } from 'redux'

// console.log('101')

// const add=({a,b},c)=>{
//     return a + b+c
// }

// console.log(add({a:1,b:12},100))


// method 1
// const incrementCount=(payload={})=>{
//     return{
//         type:'INCREMENT',
//         incrementby:typeof payload.incrementby==='number'?payload.incrementby:1
//     }
// }

// method 2
const incrementCount=({incrementby=1}={})=>{
    return{
        type:'INCREMENT',
        incrementby
    }
}

const decrementCount=({decrementby=-1}={})=>{
    return{
        type: 'DECREMENT',
        decrementby
    }
}

const resetCount=()=>{
    return{
        type:'RESET',

    }
}

const setCount=({count}={})=>{
    return{
        type:'SET',
        count:count
        
    }
}

// reducers are pure functions
const reducers=(state = { count: 0 }, action) => {  // two params

    switch (action.type) {
        case 'INCREMENT':
            const incrementby = typeof action.incrementby === 'number' ? action.incrementby : 1;
            return {
                count: state.count + incrementby
            }
        case 'DECREMENT':
            const decrementby = typeof action.decrementby === 'number' ? action.decrementby : -1;
            return {
                count: state.count + decrementby
            }


        case 'RESET':
            return {
                count: 0
            }


        case 'SET':
            // console.log(state.count)
            return {
                count: action.count
            }

        default:
            return state
    }


    // return state;
}


const store = createStore(reducers)


const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})


//unsubscribe() // state is being changing but not being notified


// console.log(store.getState())

store.dispatch({
    type: 'INCREMENT',
    // incrementby: 5
})


// store.dispatch({
//     type: 'INCREMENT'
// })

store.dispatch(incrementCount({incrementby:5}))

// store.dispatch({
//     type: 'DECREMENT',
//     decrementby: -10
// })

store.dispatch(decrementCount())

// store.dispatch({
//     type: 'RESET'
// })

store.dispatch(resetCount())

// store.dispatch({
//     type: 'SET',
//     count: 101
// })

store.dispatch(setCount({count:100}))


// console.log(store.getState())