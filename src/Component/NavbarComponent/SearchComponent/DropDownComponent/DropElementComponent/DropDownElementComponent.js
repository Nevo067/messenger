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
            <li class="dropdown-item" data-id={this.props.compte.id} onClick ={() => this.begin(this.props.compte.id)}>
                {this.props.compte.login} 
            </li>
        )
    }
    begin(id)
    {
        this.props.beginConversation(id)
    }
}
export default DropDownElement