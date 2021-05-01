import { Component } from "react";
import { connect } from "react-redux";
import NavbarComponent from "../NavbarComponent/NavbarComponent"
import {getDataMessage} from "../../js/action/index"

class NavbarControllerComponent extends Component{

    constructor(props)
    {
        super(props)
        this.state = {comptes:[]}
    }

    render()
    {
        return (
            <NavbarComponent 
            comptes = {this.props.comptes}
            isConnected = {this.props.isConnected}

            />
        )
    }
    componentDidMount()
    {
        
    }

}
const mapStateToProps = (state) =>{
    return {
        comptes : state.messages
    };
    
}
export default connect(mapStateToProps,{getDataMessage})(NavbarControllerComponent)