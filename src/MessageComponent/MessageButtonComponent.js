import React from 'react';
class MessageButtonComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {newMessage:""};
    }
    render()
    {
        
        return (
            <form >
                <textarea value = {this.state.newMessage}  />
                <input type="submit"></input>
            </form>
        )
    }

    SendMessage(e)
    {
        this.props.addMessage(e);
    }

}
export default MessageButtonComponent;