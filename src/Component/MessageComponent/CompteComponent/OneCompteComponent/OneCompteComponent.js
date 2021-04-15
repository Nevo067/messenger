import { Component } from "react";
import './OneCompteComponent.css';
class OneCompteComponent extends Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <div class ="row  bg-light compte">
                <p>{this.props.compte}</p><br/>
                <p>coucou</p>
            </div>

        )
    }
}
export default OneCompteComponent;