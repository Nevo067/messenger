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
            <p class ="bg-light compte">{ this.props.compte}</p>

        )
    }
}
export default OneCompteComponent;