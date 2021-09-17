import React from 'react';
class MessageButtonComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {newMessage:""};
        this.SendMessage = this.SendMessage.bind(this)

        
    }
    render()
    {
        
        return (
            <form >
                <textarea class="form-control"value = {this.state.newMessage} onChange ={(e)=>this.handleChangeTextArea(e)}/>
                <input type="button" value="envoyer" class="btn btn-success form-control" onClick={(e)=>this.SendMessage(e)}></input>
            </form>
        )
    }

    handleChangeTextArea(e)
    {
        this.setState({newMessage : e.target.value})
    }
    //up state
    SendMessage(e)
    {
        console.log("button")
        console.log(this.state.newMessage)
        this.props.addMessage(this.state.newMessage);
        e.preventDefault();
    }

}
export default MessageButtonComponent;