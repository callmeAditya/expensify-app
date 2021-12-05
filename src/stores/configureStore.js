import { createStore, combineReducers,applyMiddleware , compose} from 'redux' //3 getting compose
import expnesesreducers from '../reducers/expenses'
import expensesfilter from '../reducers/filters'
import thunk from 'redux-thunk'

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose //2
export default()=>{
const store = createStore(
    combineReducers({
        expenses: expnesesreducers,
        filter: expensesfilter
    }),
    composeEnhancer(applyMiddleware(thunk)) // 1.
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
return store
}
