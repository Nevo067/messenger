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
            <li class="dropdown-item">
                {this.props.compte}
            </li>
        )
    }
}
export default DropDownElement