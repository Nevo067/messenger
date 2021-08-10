import { act } from 'react-dom/test-utils';
import ADD_MESSAGE, { MESSAGE_LOAD, MESSAGE_LOAD_FRONT,COMPTE_LOAD, 
    COMPTE_RESET,COMPTE_ADD, MESSAGE_RESET,USER_LOAD,IS_CONNECT_TRUE,
    IS_CONNECT_FALSE, 
    BEGIN_A_CONVERSATION,
    LOAD_CONVS} from '../constant/index';

const initialState = {
    messages: [],
    comptes:[],
    user:{},
    convs:[],
    actualConv:{},
    isConnect:false
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
            console.log("le message est load")
            return {
                ...state,
                messages: state.messages.concat(action.payload)
            };
        case COMPTE_LOAD:
            return {
                ...state,
                comptes: state.comptes.concat(action.payload)
            };
        case COMPTE_ADD:
            return Object.assign({},state,{
                comptes:[state.comptes].concat(action.payload)
            });
        case USER_LOAD:
            console.log(action.payload)
            return{
                ...state,
                user:action.payload,
                isConnect:true
            }; 
        case COMPTE_RESET:
            return {
                ...state,
                comptes: []
            };
        case MESSAGE_RESET:
            return{
                ...state,
                messages:[]
            };
        //Change the variable that check if the user is connected
        case IS_CONNECT_FALSE:
            return{
                ...state,
                isConnect:false
            };
        case IS_CONNECT_TRUE:
            console.log(initialState.isConnect)
            console.log("isConnect")
            return{
                ...state,
                isConnect:true
            };
        case BEGIN_A_CONVERSATION:
            return{
                ...state,
                ActualConv:action.payload
            }
        case LOAD_CONVS:
            return{
                ...state,
                convs:action.payload
            }
        default:
            break;
    }
    console.log(state)
    return state;
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