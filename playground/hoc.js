import React from 'react'
import ReactDOM from 'react-dom'


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <h4>This info:{props.info}</h4>
    </div>
)

const warning = (Element) => {
    return (props) => (  //HOC -> higher order component

        <div>
            {props.isAdmin && <p>Private Info </p>}
            <Element {...props}/>
        </div>
    );
};

const requireInfo=(Element)=>{
    return (props)=>(
        <div>
        {props.isAuth ? <Element {...props}/> : <p>You are not authenticated</p>}
        </div>
    )
}

const Admin = warning(Info)
const Auth = requireInfo(Info)

// ReactDOM.render(<Admin isAdmin={false} info="Hi😊there!" />, document.getElementById('app'))
ReactDOM.render(<Auth isAuth={true} info="Hi😊there!" />, document.getElementById('app'))