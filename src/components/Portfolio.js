import React from 'react'
import HeaderP from './HeaderP'

const Portfolio=(props)=>{
    console.log(props.match)
    return(
        <div>
        <HeaderP/>
        <h3>Things I've done! </h3>
        <ul>
        <li>Item #1</li>
        <li>Item #2</li>
        <li>Item #3</li>
        </ul>
        </div>
    )
}

export default Portfolio