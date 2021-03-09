import React from 'react';
class MessageText extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = { Message : props.Message }
    }

    render()
    {
        return(
            <div class="border border-primary rounded-10">
                <p>{this.state.Message}</p>
            </div>

            
        );
    }
}
export default MessageText