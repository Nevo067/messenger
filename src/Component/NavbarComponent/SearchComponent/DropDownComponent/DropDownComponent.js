import { Component } from "react";
import DropElementComponent from "./DropElementComponent/DropDownElementComponent";

class DropDownComponent extends Component{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        const listCompte = this.props.comptes.map((compte,index)=>
            <DropElementComponent compte={compte} />
        )
        
            
        
        return (
            <div class="btn-group">
                <button class="btn btn-outline-primary my-2 my-sm-0 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Search
                </button>
            <ul class="dropdown-menu" aria-labelledby="search">
                {listCompte}
                <li class="dropdown-item" >test1</li>
            </ul>
            </div>
        )
    }
}
export default DropDownComponent