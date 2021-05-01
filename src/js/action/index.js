import {ADD_MESSAGE,MESSAGE_LOAD,MESSAGE_RESET,COMPTE_RESET, USER_LOAD, IS_CONNECT_TRUE} from '../constant/index';
export function addMessage(payload){
    return function(dispatch){
        console.log("se lance")
        dispatch({type:ADD_MESSAGE,payload})
    }
    
};

export function getDataMessage(){
    return function(dispatch) {
        console.log("dataMessage")
    return fetch("http://127.0.0.1:5000/User",{mode:'cors'})
    .then(response => response.json())
    .then(json => {
        dispatch({type : MESSAGE_RESET, payload : ""})
        json.forEach(element => {
            console.log(element.login)
            dispatch({type : MESSAGE_LOAD, payload : element.login});
        });
        
    });
    } 
}
export function getDataCompte(){
    return function(dispatch) {
    return fetch("http://127.0.0.1:5000/User",{mode:'cors'})
    .then(response => response.json())
    .then(json => {
        json.forEach(element => {
            console.log(element.login)
            dispatch({type : MESSAGE_LOAD, payload : element.login});
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
export function getUserByLoginPass(login,password)
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
            if(user)
            {
                console.log("cela marche et c'est lancer")
                console.log(login)
                dispatch({type : USER_LOAD,payload:{login:login}})
                
                
            }
        });
    }
           
}
//Function to create a conversation
export function beginAConversation()
{
    return function(dispatch)
    {
        console.log("onclick marche")
    }
    
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
