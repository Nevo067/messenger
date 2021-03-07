import React from 'react';
import MessageText from './MessageText/MessageText'
class MessageVueComponent extends React.Component
{
    constructor(props)
    {
       super(props)
       this.state = {ListMessage : props.ListMessage }
    }

    render()
    {
        const tabList = this.state.ListMessage
        const listMessage = this.state.ListMessage.map(
            (message)=>
            <MessageText
                Message ={message}
             />
        );
        console.log({listMessage})
        console.log({tabList})

        return (<div>{listMessage}</div>)
    }

}
export default MessageVueComponent