import { Component } from "react";
import DropElementComponent from "./DropElementComponent/DropDownElementComponent";

class DropDownComponent extends Component{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        const listCompte = this.filterDropDownElement(this.props.searchWord)
        
            
        
        return (
            <div class="btn-group">
                <button class="btn btn-outline-primary btn-lg w-100 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Search
                </button>
            <ul class="dropdown-menu" aria-labelledby="search">
                {listCompte}
                <li class="dropdown-item" >test1</li>
            </ul>
            </div>
        )
    }
    filterDropDownElement(mess)
    {
        return this.props.comptes.filter(x => (x.login.search(mess)!== -1)).map((compte,index)=>
            
            <DropElementComponent 
            compte={compte}
            beginConversation = {this.props.beginConversation} 
            key={"dropSearch"+index} 
                
            />
           
        )
    }
}
export default DropDownComponent