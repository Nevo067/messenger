import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataMessage,getDataCompte } from "../../js/action";
import { addMessage } from '../../js/action';
import MessageComponent from "../MessageComponent/MessageComponent";
import {beginAConversation} from '../../js/action'
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import { Route,BrowserRouter as Router,Switch } from "react-router-dom";

import store from '../../js/store';


export class MessageControllerComponent extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = { messages: [] }
        this.beginAConv = this.beginAConv.bind(this)

    }

    componentDidMount() {
        this.props.getDataMessage().then(prom => {

            this.setState({ messages: this.props.Lmessages })
            console.log(this.state)
        });
        this.props.getDataCompte()

    }
    componentDidUpdate() {

    }
    render() {

        const t = this.props.Lmessages
        console.log(t)

        return (<div>
                        
                        <MessageComponent
                            addMessage={(e) => this.addMessages(e)}
                            beginAConversation={(e)=>this.beginAConv(e)}
                            key="liste"
                            ListMessage={t}
                            ListCompte = {this.props.comptes} />
                </div>
           
        )
                    
          

    }
    addMessages(e) {
        this.props.addMessage(e)
        this.setState({ messages: this.props.Lmessages })
    }
    beginAConv(e)
    {
        this.props.beginAConversation(e,this.props.user.id)
    }

}

const mapStateToProps = (state) => {
    return {
        Lmessages: state.messages,
        comptes: state.comptes,
        conv:state.ActualConv, 
        user:state.user
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // dispatching actions returned by action creators
        getDatass: () => {
            getDataMessage();
            this.setState({ messages: this.props.Lmessages })

        }
    }
}

export default connect(
    mapStateToProps,
    { addMessage, getDataMessage,beginAConversation,getDataCompte })
    (MessageControllerComponent)