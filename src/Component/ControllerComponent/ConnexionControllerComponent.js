import { Component } from "react";
import { connect } from "react-redux";
import { getDataCompte,getUserByLoginPass } from "../../js/action";
import ConnexionComponent from "../ConnexionComponent/ConnexionComponent"

class ConnexionControllerComponent extends Component{
    constructor(props)
    {
        super(props)
        this.state = {compte :[],user:{}}
        this.verifCompte = this.verifCompte.bind(this)
    }
    render()
    {
        return (<div>
            <ConnexionComponent 
                Connexion ={this.verifCompte}
                user = {this.state.user}
                key="connexion"
             />
        </div>)
    }
    componentDidMount()
    {
        this.props.getDataCompte().then(
            this.setState({compte : this.props.compte})
        )
        this.setState({user : this.props.user})
        
    }
    verifCompte(login,password)
    {
        this.props.getUserByLoginPass(login,password);
    }
}
const mapStateToProps = (state)=>{
    return {
        compte : state.compte,
        user:state.user
    };
}
//TODO Faire methode Connnexion 
export default connect(mapStateToProps,
    {getDataCompte,getUserByLoginPass})
    (ConnexionControllerComponent)