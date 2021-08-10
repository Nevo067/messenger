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
            <div class ="row  compte" onClick = {()=>this.props.changeConv(this.props.compteId)}>
                <p>{this.props.compteLogin}</p><br/>
                <p>coucou</p>
            </div>

        )
        
    }
}
export default OneCompteComponent;