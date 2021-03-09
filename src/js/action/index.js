import ADD_MESSAGE from '../constant/index'
export function addArticle(payload){
    return { type: "ADD_MESSAGE", payload}
};
export function getData(payload){
    return fetch("")
    .then(response => response.json())
    .then(json => {
        return {type : "DATA_LOAD", payload : json};
    });
    
}