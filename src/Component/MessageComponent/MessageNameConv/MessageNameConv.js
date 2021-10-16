import { Component } from "react";
import {HiPhotograph} from "react-icons/hi"
class MessageNameConv extends Component{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return(
            <div class="row">
                <div class="col col-3"><HiPhotograph /></div>
                <div class="col col-9">
                    <h4 class="">{this.props.nameConv}</h4>
                </div>
            </div> 
        )
    }
}
export default MessageNameConv;