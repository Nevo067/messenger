import {ADD_MESSAGE,MESSAGE_LOAD} from '../constant/index';
export function addMessage(payload){
    return function(dispatch){
        console.log("se lance")
        dispatch({type:ADD_MESSAGE,payload})
    }
    
};

export function getDataMessage(){
    return function(dispatch) {
    return fetch("http://127.0.0.1:5000/User")
    .then(response => response.json())
    .then(json => {
        json.forEach(element => {
            console.log(element.login)
            dispatch({type : MESSAGE_LOAD, payload : element.login});
        });
        
    });
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
        .then()
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