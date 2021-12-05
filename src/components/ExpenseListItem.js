import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { setTextValue } from '../actions/filters'


const expenseListItem=({dispatch, id,description,amount,createdAt})=>(
    <div>
    <Link to={`/edit/${id}`}><h1>{description}</h1></Link>
    <p>ID:{id}</p>
    <p>Amount:{amount}</p>
    <p>CreatedAt:{createdAt}</p>
  
    </div>
)


// const mapstatetoprops=(state)=>{
//     return{

//     }
// }


export default expenseListItem