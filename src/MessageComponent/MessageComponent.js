import React from 'react';
import ReactDOM from 'react-dom';

import MessageButtonComponent from './MessageButtonComponent';
class MessageComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = { ListMessage: [] }
    }

    render() {
        return(
            <MessageButtonComponent 
                addMessage = {this.addMessage}
                ListMessage = {this.state.ListMessage}
            />
        );
    }

    addMessage(e) {
        this.setState((prevState, Props) => {
            return { ListMessage: prevState.ListMessage.push(e.target.value) }
        }
        );
    }


}
export default MessageComponent;