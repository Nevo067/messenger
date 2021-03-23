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
        return(
            <div key={this.props.mesKey} class="message border border-primary rounded-30 bg-primary text-white">
                <p>{this.props.Message}</p>
            </div>

            
        );
    }
}
export default MessageText