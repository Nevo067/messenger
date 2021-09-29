import apiIp from '../../environment/apiConst';
import {ADD_MESSAGE,MESSAGE_LOAD,MESSAGE_RESET,COMPTE_RESET, USER_LOAD, IS_CONNECT_TRUE,BEGIN_A_CONVERSATION,COMPTE_LOAD, LOAD_CONVS, CHANGE_CONV, LOAD_PART, ADD_CONV} from '../constant/index';
/*
export function addMessage(load){
    return function(dispatch){

        const request ={
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(load)
            
        };

        return fetch(apiIp+`/message`,request,{mode:'cors'})
        .then(reponse => reponse.json)
        .then(x =>{
            console.log("se lance")
            dispatch({type:ADD_MESSAGE,payload:load.TEXT})
        })  
    }
};
*/
export function addMessageSocketEmit(socket,load){
    return function(dispatch){

        
        socket.emit("/message",JSON.stringify(load))
       
         
    }
};
export function addMessageSocketOn(load){
    return function(dispatch){
        console.log("ppc")
        dispatch({type:ADD_MESSAGE,payload:load}) 
    }
};

export function getDataMessage(){
    return function(dispatch) {
        console.log("dataMessage")
    return fetch(apiIp+"Message/Conv",{mode:'cors'})
    .then(response => response.json())
    .then(json => {
        
        dispatch({type : MESSAGE_RESET, payload : ""})
        json.forEach(element => {
            
            dispatch({type : MESSAGE_LOAD, payload : element});
        });
        
    });
    } 
}
export function getDataCompte(){
    return function(dispatch) {
    return fetch("http://127.0.0.1:5000/User",{mode:'cors'})
    .then(response => response.json())
    .then(json => {
        dispatch({type : COMPTE_RESET, payload : ""})
        json.forEach(element => {
            console.log(element.login)
            dispatch({type : COMPTE_LOAD, payload : {id:element.id,login:element.login}});
        });
        
    });
    } 
}
export function postCompte(payload)
{
    return function(dispatch)
    {
        const request ={
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({login:payload.login,password:payload.password})
            
        };
        return fetch('http://127.0.0.1:5000/User',request,{mode:'cors'})
        .then(response => response.json())
        
    }
}
export function resetMessage()
{
    return function(dispatch)
    {
        dispatch({type: MESSAGE_RESET,dispatch: {}})
    }
}
export function resetCompte()
{
    return function(dispatch)
    {
        dispatch({type: COMPTE_RESET,dispatch: {}})
    }
}

export function addPostMessage(payload)
{
    return function(dispatch)
    {
        const request ={
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({text:payload.text})
        };
        fetch('',request)
        .then(response => response.json())

    }
}
//FUNCTION TO CHECK IF USER EXIST
//TODO:A test
export function getUserByLoginPass(login,password,socket)
{
    return function(dispatch)
    {
        const request ={
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({login:login,password:password})
            
        };
        return fetch(`http://127.0.0.1:5000/User/IsExist`,request,{mode:'cors'})
        .then(response => response.json())
        .then(user=>{
            if(user !== false)
            {   
                
                
                dispatch({type : USER_LOAD,payload:user})
                socket.emit("/connectRoom",user.id)
                
            }
        });
    }
           
}
//Function to create a conversation
export function beginAConversation(id1,id2)
{
    return function(dispatch)
    {
        console.log(id1)
        console.log(id2);
        const request ={
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({id1:id1,id2:id2,})
            
        };
        return fetch(`http://127.0.0.1:5000/Conv/CreateConv`,request,{mode:'cors'})
        .then(response => response.json())
        .then(conv=>{
            console.log(conv)
            dispatch({type:BEGIN_A_CONVERSATION ,payload:conv}) 
        });
    }
    
}
export function beginAConversationEmit(id1,id2,socket)
{
    let load = "{id1:"+id1+",id2:"+id2+"}";
    socket.emit("/beginConversation",load);
}
//Conversation Method

export function loadConv(idUser)
{
    return function(dispatch)
    {
        const request ={
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({Id:idUser})
            
        };
        return fetch(apiIp+`Conv/findUser`,request,{mode:'cors'})
        .then(response => response.json())
        .then(conv=>{
            console.log(conv)
            dispatch({type:LOAD_CONVS ,payload:conv}) 
        });
    }
}
export function ChangeConv(id,conv)
{
    return function(dispatch)
    {
        //PARAMETER REQUEST
        const request ={
            method:'GET',
            headers:{'Content-Type': 'application/json'},
        };
        //CHANGE THE CURRENT CONVERSATION
        dispatch({type:CHANGE_CONV ,payload:conv});

        //LOAD MESSAGE OF CONVERSATION 
        return fetch(apiIp+"Message/Conv/"+id,request,{mode:'cors'})
        .then(response=> response.json())
        .then(json => {
            dispatch({type : MESSAGE_RESET, payload : ""})
            json.forEach(element => {
                console.log(element.text)
                dispatch({type : MESSAGE_LOAD, payload : element});
            });
            
        });
    }
    
}
export function FindParticipant(idUser,idConv)
{
    const request ={
        method:'GET',
        headers:{'Content-Type': 'application/json'},
    };

    return function(dispatch)
    {
        return fetch(apiIp+`Participant/${idConv}/${idUser}`,request,{mode:'cors'})
        .then(reponse=> reponse.json())
        .then(json =>{
            dispatch({type:LOAD_PART,payload:json})
        })
    }
    
}
export function joinRoom()
{

}



/*
export function getDataMessage(payload){
    return function(dispatch) {
    dispatch({type : "DATA_LOAD", payload : payload});   
}
};
export function getDataMessage(payload=''){
    let t =["lllllaa","hhhh"];
    return t ;
}
*/
