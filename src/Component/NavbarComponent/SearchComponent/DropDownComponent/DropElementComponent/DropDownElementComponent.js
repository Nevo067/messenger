import { Component } from "react";

class DropDownElement extends Component
{
    constructor(props)
    {
        super(props)
        this.begin = this.begin.bind(this)
    }

    render()
    {
        
        return(
            <li class="dropdown-item" data-id={this.props.compte.id} key={this.props.compte.id} onMouseDown={this.begin(this.props.compte.id)}>
                {this.props.compte.login} 
            </li>
        )
    }

    begin(e)
    {
        //For item menu bar 
        
        this.props.beginConversation(e)
    }
}
export default DropDownElement