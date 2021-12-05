
class VisibilityToggle extends React.Component{
    constructor(props){
        super(props)
        this.toggleme=this.toggleme.bind(this)
        this.state={
            Visibility : false
        }

    }
toggleme() {
    // Visibility = !Visibility
    this.setState((prevState)=>{
        return {
            Visibility:!prevState.Visibility
        }
    })
    console.log(this.state.Visibility)   

}
    render()
    {
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.toggleme}>
                {this.state.Visibility ? 'Show Details' : 'Hide Details'}
            </button>
            {this.state.Visibility?'':
            <div>
            <p>Hello there how are u doing!</p>
            </div>
        }
            </div>
        )
    
}
}

ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'))