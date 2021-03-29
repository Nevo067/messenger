import { act } from 'react-dom/test-utils';
import ADD_MESSAGE, { MESSAGE_LOAD, MESSAGE_LOAD_FRONT,COMPTE_LOAD, COMPTE_RESET } from '../constant/index';

const initialState = {
    messages: [],
    comptes:[]
};

function rootReducer(state = initialState,action)
{
    switch (action.type) {
        case ADD_MESSAGE:
            console.log("message se lance")
            return Object.assign({}, state, {
                messages: [...state.messages].concat(action.payload)
            });
        case MESSAGE_LOAD:
            console.log("cela marche")
            return {
                ...state,
                messages: state.messages.concat(action.payload)
            }
        case COMPTE_LOAD:
            return {
                ...state,
                comptes: state.comptes.concat(action.payload)
            }
        case COMPTE_RESET:
            return {
                ...state,
                comptes: []
            }
        default:
            break;
    }

    /*
    if(action.type == ADD_MESSAGE)
    {
        console.log("message se lance")
        return Object.assign({},state,{
            messages: [...state.messages].concat(action.payload)
        });
    }
    else if(action.type == MESSAGE_LOAD)
    {
        console.log("cela marche")
        return{
             ...state,  
             messages: state.messages.concat(action.payload) 
        } 
    }
    else if(action.type == COMPTE_LOAD)
    {
        
        return{
            ...state,
            comptes:state.comptes.concat(action.payload)
        }
    }
    else if(action.type == COMPTE_RESET)
    {
        return{
            ...state,
            comptes:[]
        }
    }
    return state;
    */
};

export default rootReducer