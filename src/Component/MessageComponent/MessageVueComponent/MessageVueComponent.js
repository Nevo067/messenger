import React from 'react';
import MessageText from './MessageText/MessageText'
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
             />
        );
        console.log({listMessage})
        console.log({tabList})

        return (<div class = "col col-12">{listMessage}</div>)
    }

}
export default MessageVueComponent