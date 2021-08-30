import { Component } from "react";
import { connect } from "react-redux";
import NavbarComponent from "../NavbarComponent/NavbarComponent"
import {getDataMessage,beginAConversation} from "../../js/action/index"

class NavbarControllerComponent extends Component{

    constructor(props)
    {
        super(props)
        this.state = {comptes:[]}
        this.BeginConversation = this.BeginConversation.bind(this);
    }

    render()
    {
        return (
            <NavbarComponent 
            comptes = {this.props.comptes}
            isConnected = {this.props.isConnected}
            beginConversation = {this.BeginConversation}

            />
        )
    }
    componentDidMount()
    {
        
    }
    BeginConversation(idCompte)
    {
        console.log(idCompte)
        this.props.beginAConversation(this.props.user.id,idCompte)
    }

}
const mapStateToProps = (state) =>{
    return {
        comptes : state.comptes,
        isConnected: state.isConnect,
        user: state.user
    };
    
}
export default connect(mapStateToProps,{getDataMessage,beginAConversation})(NavbarControllerComponent)