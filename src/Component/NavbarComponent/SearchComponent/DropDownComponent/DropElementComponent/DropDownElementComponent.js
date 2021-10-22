import { Component } from "react";

class DropDownElement extends Component
{
    constructor(props)
    {
        super(props)
       
    }

    render()
    {
        
        return(
            <li class="dropdown-item" data-id={this.props.compte.id} key={this.props.compte.id} onMouseDown={() =>this.begin()}>
               {this.props.compte.login} 
            </li>
        )
    }

    begin()
    {
        
        //For item menu bar 
        console.log("test");
        console.log("test");
        this.props.beginConversation(this.props.compte.id)
    }
}
export default DropDownElement