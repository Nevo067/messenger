import { Component } from "react";
import DropDownComponent from "./DropDownComponent/DropDownComponent"

class SearchComponent extends Component 
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <DropDownComponent comptes= {this.props.comptes}/> 
            </form>
        )
    }
}
export default SearchComponent