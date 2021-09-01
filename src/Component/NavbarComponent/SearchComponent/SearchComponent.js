import { Component } from "react";
import DropDownComponent from "./DropDownComponent/DropDownComponent"

class SearchComponent extends Component 
{
    constructor(props)
    {
        super(props)
        this.state ={compteSearch :""}
        this.changeCompteSearch = this.changeCompteSearch.bind(this);
    }
    render()
    {
        return(
            
            <form class="form-inline" data-toggle="dropdown">
            <div class="col col-10">
                <input class="form-control form-control-lg w-100 float-left" type="search" placeholder="Search" aria-label="Search"  aria-haspopup="true"  value={this.state.compteSearch} onChange={this.changeCompteSearch}></input>
            </div>
            <div class="col col-2">
            <DropDownComponent 
                comptes= {this.props.comptes}
                searchWord = {this.state.compteSearch}
                beginConversation = {this.props.beginConversation}
            />
            </div>
             
            
                
                
            </form>
        )
    }
    changeCompteSearch(event)
    {
        if(event.target.value != "")
        {
            this.setState({compteSearch:event.target.value})
        }
        
    }
}
export default SearchComponent