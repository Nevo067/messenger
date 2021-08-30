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
            
            <form class="form-inline my-2 my-lg-0">
            
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" data-toggle="dropdown" aria-haspopup="true"  value={this.state.compteSearch} onChange={this.changeCompteSearch}></input>
            
            
            <DropDownComponent 
                comptes= {this.props.comptes}
                searchWord = {this.state.compteSearch}
                beginConversation = {this.props.beginConversation}
            /> 
            
                
                
            </form>
        )
    }
    changeCompteSearch(event)
    {
        this.setState({compteSearch:event.target.value})
    }
}
export default SearchComponent