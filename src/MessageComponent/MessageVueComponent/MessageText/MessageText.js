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
            <div>
                <p>{this.state.Message}</p>
            </div>
        );
    }
}
export default MessageText