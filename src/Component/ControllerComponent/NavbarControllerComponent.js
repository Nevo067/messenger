import { Component } from "react";
import { connect } from "react-redux";
import NavbarComponent from "../NavbarComponent/NavbarComponent"
import {getDataMessage,loadConv,beginAConversationOn,beginAConversationEmit} from "../../js/action/index"
import socket from "../../environment/socketConst";
class NavbarControllerComponent extends Component{

    constructor(props)
    {
        super(props)
        this.state = {comptes:[]};
        this.BeginConversation = this.BeginConversation.bind(this);
        this.BeginConversationOn = this.BeginConversationOn.bind(this);
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
        this.BeginConversationOn(this.props.user.id);
    }
    BeginConversation(idCompte)
    {
        console.log(idCompte)
        this.props.beginAConversationEmit(this.props.user.id,idCompte,socket)
        
    }
    BeginConversationOn(idCompte)
    {
        this.props.beginAConversationOn(socket,idCompte)
    }

}
const mapStateToProps = (state) =>{
    return {
        comptes : state.comptes,
        isConnected: state.isConnect,
        user: state.user
    };
    
}
export default connect(mapStateToProps,{getDataMessage,loadConv,beginAConversationOn,beginAConversationEmit})(NavbarControllerComponent)