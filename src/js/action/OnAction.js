import ADD_MESSAGE from "../constant"

export function OnMessage(socket)
{
    return function(dispatch)
    {
        
        socket.on("/messageC",(msg)=>
        {
            console.log(msg)
            console.log("message reçu")
            dispatch({type:ADD_MESSAGE,payload:msg})
        })
    }
    
   
}

export default OnMessage;