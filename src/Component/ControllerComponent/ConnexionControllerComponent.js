import { Component } from "react";
import { connect } from "react-redux";
import { getDataCompte } from "../../js/action";
import {ConnexionComponent} from "../ConnexionComponent/ConnexionComponent"

class ConnexionControllerComponent extends Component{
    constructor(props)
    {
        super(props)
        this.state = {compte :[]}
    }
    render()
    {
        return (<div>
            <ConnexionComponent Connexion ={this.verifCompte()} />
        </div>)
    }
    componentDidMount()
    {
        this.props.getDataCompte().then(
            this.setState({compte : this.props.comptesM})
        )
    }
    verifCompte()
    {

    }
}
const mapStateToProps = (state)=>{
    return {
        compte : state.compte
    };
}
//TODO Faire methode Connnexion 
export default connect(getDataCompte,(ConnexionControllerComponent))