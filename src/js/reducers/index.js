import ADD_MESSAGE, { MESSAGE_LOAD, MESSAGE_LOAD_FRONT } from '../constant/index';

const initialState = {
    messages: []
};

function rootReducer(state = initialState,action)
{
    if(action.type == ADD_MESSAGE)
    {
        console.log("message se lance")
        return Object.assign({},state,{
            messages: [...state.messages].concat(action.payload)
        });
    }
    if(action.type == MESSAGE_LOAD)
    {
        console.log("cela marche")
        return{
             ...state,  
             messages: state.messages.concat(action.payload) 
        } 
    }
    return state;
};

export default rootReducer