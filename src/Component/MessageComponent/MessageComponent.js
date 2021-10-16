import React from 'react';
import ReactDOM from 'react-dom';
import MessageVueComponent from './MessageVueComponent/MessageVueComponent'
import CompteComponent from "./CompteComponent/CompteComponent";
import MessageNameConv from './MessageNameConv/MessageNameConv';


import MessageButtonComponent from './MessageButtonComponent';
class MessageComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = { ListMessage: this.props.ListMessage }
        //TODO:Mettre les comptes separement des messages

        
    }

    render() {
        return (
            <div class="row">
                <div class="col col-3 border">
                    <CompteComponent 
                    comptes = {this.props.convs} 
                    beginAconversation = {this.props.beginAConversation}
                    ChangeConv = {this.props.ChangeConvActuel}
                    EditConv = {this.props.EditConv}
                    />
                </div>
                <div class="col col-9 border">
                    <h3>Message</h3>
                    <div class="row">
                        <MessageNameConv 
                            NomConv= {this.props}
                        />
                    </div>
                    <div class="row MessageCss ">
                        <MessageVueComponent key="vueComponent" 
                        ListMessage={this.props.ListMessage}
                        participant = {this.props.participant} />
                    </div>
                    <div class="row ">
                        <div class="col col-lg">
                            <MessageButtonComponent
                                addMessage={(e) => this.addMessages(e)}
                                ListMessage={this.state.ListMessage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    addMessageFront(e) {
        let messageList = this.state.ListMessage;
        messageList.push(e)

        this.setState({ListMessage : messageList})
        console.log(this.state.ListMessage)
        console.log(e)
        console.log("gggg")
    }
    addMessages(e)
    {
        console.log("MessageComponent")
        this.props.addMessage(e)
        
    }


}
export default MessageComponent;