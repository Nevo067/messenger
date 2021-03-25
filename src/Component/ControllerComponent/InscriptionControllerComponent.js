import { Component } from "react";
import { connect } from "react-redux";
import { getDataMessage } from "../../js/action";
import { addMessage } from '../../js/action';

class InscriptionControllerComponent extends Component{
    constructor(props)
    {
        super(props)
        this.state ={comptes: []}

    }
    
    
}
const mapStateToProps = (state) => {
    console.log(state.messages)
    return {
        Lmessages: state.compte
    };
}
export default connect(
    mapStateToProps,
    { addMessage, getDataMessage })
    (InscriptionControllerComponent)