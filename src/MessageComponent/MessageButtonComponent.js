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
            <form>
                <textarea class="form-control"value = {this.state.newMessage}  />
                <input type="submit" class="btn btn-success form-control"></input>
            </form>
        )
    }

    SendMessage(e)
    {
        this.props.addMessage(e);
    }

}
export default MessageButtonComponent;