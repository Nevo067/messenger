import React from 'react';
import ReactDOM from 'react-dom';
import MessageVueComponent from './MessageVueComponent/MessageVueComponent'

import MessageButtonComponent from './MessageButtonComponent';
class MessageComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = { ListMessage: [] }
        this.addMessage = this.addMessage.bind(this)
        
    }

    render() {
        return (
            <div>
                <div class="row">
                    <MessageVueComponent ListMessage = {this.state.ListMessage}/>
                </div>
                <div class="row">
                    <div class="col col-12">
                        <MessageButtonComponent
                            addMessage={this.addMessage}
                            ListMessage={this.state.ListMessage}
                        />
                    </div>
                </div>
            </div>
        );
    }

    addMessage(e) {
        let messageList = this.state.ListMessage;
        messageList.push(e)

        this.setState({ListMessage : messageList})
        console.log(this.state.ListMessage)
        console.log(e)
        console.log("gggg")
    }


}
export default MessageComponent;