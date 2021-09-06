import ADD_MESSAGE from "../constant"

export function OnMessage(dispatch,socket)
{
    socket.on("/message",(msg)=>
    {
        dispatch({type:ADD_MESSAGE,payload:msg.TEXT})

    })
   
}

export default OnMessage;