import { Component } from "react";
import DropDownComponent from "./DropDownComponent/DropDownComponent"
import DropDownElementComponent from "./DropDownComponent/DropElementComponent/DropDownElementComponent" 

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
        const listCompte = this.filterDropDownElement(this.state.compteSearch)
        return(
            
            <form class="form-inline" data-toggle="dropdown">
            <div class="col col-10">
                <input class="form-control form-control-md w-100 float-left" type="search" placeholder="Search" aria-label="Search"  aria-haspopup="true"  value={this.state.compteSearch} onChange={this.changeCompteSearch}></input>
            </div>
            <div class="col col-2">
            <DropDownComponent 
                comptes= {this.props.comptes}
                searchWord = {this.state.compteSearch}
                beginConversation = {this.props.beginConversation}
            />
            </div>
            <ul class="dropdown-menu" aria-labelledby="search" onClick={() => console.log("xxxx")} >
                {listCompte}
            </ul>  
            </form>
        )
    }
    filterDropDownElement(mess)
    {
        return this.props.comptes.filter(x => (x.login.search(mess)!== -1)).map((compte,index)=>
            
            <DropDownElementComponent tag="a"
            compte={compte}
            beginConversation = {this.props.beginConversation} 
            key={"dropSearch"+index}
            
            
                
            />
           
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