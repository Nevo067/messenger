import { Component } from "react";
import { connect } from "react-redux";
import { getDataMessage,getDataCompte,postCompte,resetCompte } from "../../js/action";
import { addMessage } from '../../js/action';
import InscriptionComponent from '../InscriptionComponent/InscriptionComponent'

class InscriptionControllerComponent extends Component{
    constructor(props)
    {
        super(props)
        this.state ={comptes: []}

    }
    componentDidMount()
    {
        this.props.getDataCompte().then(
            this.setState({compte : this.props.comptesM})
        )
    }
    render()
    {
        return (<div>
            <InscriptionComponent 
            addCompte ={(e) => this.addCompte(e)}/>
        </div>)
    }
    addCompte(newUser)
    {
        this.props.postCompte(newUser).then(
            
        );
        this.props.resetCompte();
        this.props.getDataMessage();

    }
    
}

const mapStateToProps = (state) => {
    console.log(state.messages)
    return {
        comptesM: state.compte
    };
}
export default connect(
    mapStateToProps,
    { addMessage, getDataMessage,getDataCompte,postCompte,resetCompte })
    (InscriptionControllerComponent)

