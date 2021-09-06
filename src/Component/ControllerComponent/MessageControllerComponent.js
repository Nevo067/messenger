import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataMessage,getDataCompte,loadConv,ChangeConv,FindParticipant,addMessageSocketOn} from "../../js/action";
import { addMessage } from '../../js/action';
import MessageComponent from "../MessageComponent/MessageComponent";
import {beginAConversation} from '../../js/action'
import OnMessage from '../../js/action/OnAction';
import socket from "../../environment/socketConst";


export class MessageControllerComponent extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = { messages: [] }
        this.beginAConv = this.beginAConv.bind(this);
        this.loadConvs = this.loadConvs.bind(this);
        this.ChangeConvActuel = this.ChangeConvActuel.bind(this);

    }

    componentDidMount() {
        this.props.getDataMessage().then(prom => {

            this.setState({ messages: this.props.Lmessages })
            console.log(this.state)
        });
        this.props.getDataCompte();
        this.loadConvs();
        this.props.addMessageSocketOn(socket)
        socket.on("text",()=>{console.log("test")});

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
                            ListCompte = {this.props.comptes}
                            convs = {this.props.convs}
                            ChangeConvActuel = {this.ChangeConvActuel}
                            participant = {this.props.participant}
                             />
                </div>
           
        )
                    
          

    }
    addMessages(e) {
        let message = {
            TEXT:e,
            idParticipant:this.props.participant.idParticipant
        }
        //this.props.addMessage(message)
        this.props.addMessageSocketOn(socket,message)
        this.setState({ messages: this.props.Lmessages })
    }
    beginAConv(e)
    {
        this.props.beginAConversation(e,this.props.user.id)
    }
    loadConvs()
    {
        this.props.loadConv(this.props.user.id)
    }
    ChangeConvActuel(id)
    {
        let conv = this.props.convs.find(x => x.Id == id)
        this.props.ChangeConv(id,conv).then(x =>
            {
                this.props.FindParticipant(this.props.user.id,conv.Id)
            });
    }
}

const mapStateToProps = (state) => {
    return {
        Lmessages: state.messages,
        comptes: state.comptes,
        conv:state.actualConv,
        convs:state.convs, 
        user:state.user,
        participant:state.participant
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
    { addMessage, getDataMessage,beginAConversation,getDataCompte,loadConv,ChangeConv,FindParticipant,addMessageSocketOn,OnMessage})
    (MessageControllerComponent)