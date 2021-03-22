import React from 'react';
import ReactDOM from 'react-dom';
import MessageVueComponent from './MessageVueComponent/MessageVueComponent'

import MessageButtonComponent from './MessageButtonComponent';
class MessageComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = { ListMessage: this.props.ListMessage }

        
    }

    render() {
        return (
            <div>
                <div class="row">
                    <MessageVueComponent key="vueComponent" ListMessage = {this.props.ListMessage}/>
                </div>
                <div class="row">
                    <div class="col col-12">
                        <MessageButtonComponent
                            addMessage={(e) =>this.addMessages(e)}
                            ListMessage={this.state.ListMessage}
                        />
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
        this.props.addMessage(e)
        
    }


}
export default MessageComponent;