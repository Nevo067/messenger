import React from 'react';
import './MessageText.css';
class MessageText extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = { Message : this.props.Message,keyMes:this.props.mesKey }
        
    }

    render()
    {
        let idIsEqual
        if(this.props.participant.Id != undefined)
        {
            idIsEqual = this.props.participant.Id == this.props.Message.Idparticipant;
        }
        else
        {
            idIsEqual = false;
        }
        return(
            <div>
            {idIsEqual ? 
                <div key={this.props.mesKey} class="message border border-primary rounded-30 bg-primary text-white text-right p-1">
                <p>{this.props.Message.text}</p>
                </div>
                :
                <div key={this.props.mesKey} class="message border border-primary rounded-30 bg-secondary text-white text-right p-1">
                <p>{this.props.Message.text}</p>
                </div>
            }
            </div>

            
        );
    }
}
export default MessageText