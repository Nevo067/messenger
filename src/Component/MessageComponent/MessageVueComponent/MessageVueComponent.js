import React from 'react';
import MessageText from './MessageText/MessageText'
import './MessageComponent.css';

class MessageVueComponent extends React.Component
{
    constructor(props)
    {
       super(props)
       this.state = {ListMessage : this.props.ListMessage }
    }
    componentDidMount()
    {
    }
    render()
    {
        const tabList = this.props.ListMessage
        console.log(tabList);  
        const listMessage = this.props.ListMessage.map(
            (message,index)=>
            <MessageText key={index} 
                Message ={message}
                mesKey ={index}
                participant = {this.props.participant}
             />
        );
        
        console.log(this.props.ListMessage)

        return (<div class = "col col-12">{listMessage}</div>)
    }

}
export default MessageVueComponent