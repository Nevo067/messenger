import React from 'react';
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
            <div key={this.props.mesKey} class="border border-primary rounded-10">
                <p>{this.props.Message}</p>
            </div>

            
        );
    }
}
export default MessageText