import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataMessage,getDataCompte,loadConv,ChangeConv,FindParticipant,addMessageSocketEmit,addMessageSocketOn,EditConvEmit} from "../../js/action";

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
        this.addMessages = this.addMessages.bind(this)
        this.EditConv = this.EditConv.bind(this);

    }

    componentDidMount() {
        this.props.getDataMessage().then(prom => {

            this.setState({ messages: this.props.Lmessages })
            console.log(this.state)
        });
        this.props.getDataCompte();
        this.loadConvs();
        socket.on("text",()=>{console.log("test")});
        //Get Update Message
        socket.on("/messageC",msg =>
        {
            this.props.addMessageSocketOn(msg)
        });
        
        socket.on("/EditNomConv",conv =>
        {
            this.loadConvs();
        });
        

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
                            EditConv = {(id,nom)=>this.EditConv(id,nom)}
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
        console.log("ooohh")
        this.props.addMessageSocketEmit(socket,message)
        
    }
    beginAConv(e)
    {
        this.props.beginAConversation(e,this.props.user.id)
    }
    //Get Conversation to back end depending on the user
    loadConvs()
    {
        console.log("la vie"+this.props.user.id)
        if(this.props.user.id != null)
        {
            this.props.loadConv(this.props.user.id)
        }
        
    }
    ChangeConvActuel(id)
    {
        let conv = this.props.convs.find(x => x.Id == id)
        this.props.ChangeConv(id,conv,socket).then(x =>
            {
                this.props.FindParticipant(this.props.user.id,conv.Id)
            });
    }
    EditConv(id,nom)
    {
        this.props.EditConvEmit(id,nom,socket);
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
    { getDataMessage,beginAConversation,getDataCompte,loadConv,ChangeConv,FindParticipant,addMessageSocketEmit,addMessageSocketOn,OnMessage,EditConvEmit})
    (MessageControllerComponent)