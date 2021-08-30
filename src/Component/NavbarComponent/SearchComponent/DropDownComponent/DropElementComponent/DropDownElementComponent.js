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
            <li class="dropdown-item" onClick ={this.props.beginConversation(this.props.compte.id)}>
                {this.props.compte.login} 
            </li>
        )
    }
}
export default DropDownElement