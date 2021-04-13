import  {Component}  from "react";
import  {connect}  from "react-redux";
import  { getDataCompte,getUserByLoginPass }  from "../../js/action";
import ConnexionComponent from "../ConnexionComponent/ConnexionComponent";

class ConnexionControllerComponent extends Component{
    constructor(props)
    {
        super(props)
        this.state = {compte :[],user:{},isConnect:false}
        this.verifCompte = this.verifCompte.bind(this)
    }
    render()
    {
        
        const isConnect = this.state.isConnect

        console.log("xxx");
        return (<div key ={this.props.isConnect}>
            <ConnexionComponent 
                Connexion ={this.verifCompte}
                user = {this.state.user}
                isConnect = {this.props.isConnect}
                key="connexion"
             />
        </div>)
    }
    componentDidMount()
    {
        console.log("je suis monté")
        this.props.getDataCompte().then(
            this.setState({compte : this.props.compte})
        )
        this.setState({user : this.props.user})
        console.log(this.props.isConnect)
        this.setState({isConnect : this.props.isConnect})
        
    }
    verifCompte(login,password)
    {
        return this.props.getUserByLoginPass(login,password).then(
            this.setState({isConnect : this.props.isConnect})
            
        );
        
        
    }
}
const mapStateToProps = (state)=>{
    console.log()
    return {
        compte : state.compte,
        user: state.user,
        isConnect : state.isConnect
    };
}
//TODO Faire methode Connnexion 
export default connect(mapStateToProps,
    {getDataCompte,getUserByLoginPass})
    (ConnexionControllerComponent)