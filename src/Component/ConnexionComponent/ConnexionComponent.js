import { Component } from "react";
import './connexion.css'
class ConnexionComponent extends Component
{
    constructor(props)
    {
        super(props)
        //init
        this.state = {login:"",password:"",user:this.props.user,isConnect:this.props.isConnect}
        console.log(this.state.user)
        //bind of method
        this.loginChange = this.loginChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this);
        this.postUser = this.postUser.bind(this);
        console.log(this.props.isConnect)
    }

    render() {
        const isConnect = this.state.isConnect
        console.log(isConnect)
        return (
            <div key={this.props.isConnect} class="cardConnexion bg-light shadow">
                <form>
                    <div class="form-group row">
                        <label for="login" class="text-center col col-3" >Login</label>
                        <input id="login" value={this.state.login} class="col col-lg form-control-lg" onChange={this.loginChange} type="text" />
                    </div>
                    <div class="form-group row">
                        <label for="password" class=" text-center col col-3">Password</label>
                        <input id="password" value={this.state.password} class="col col-lg form-control-lg" onChange={this.passwordChange} type="text" />
                    </div>
                    <div class="row align-self-center ">
                        <input type="button" value="Connexion" onClick={this.postUser} class="col col-lg form-control btn btn-success" />
                    </div>
                    {this.props.isConnect ?
                        (<div ><p>Vous etes connecter {this.state.user.login} </p></div>)
                        :
                        (<p>Vous etes pas connecter</p>)
                    }
                </form>
            </div>
        )
    }
    componentDidMount()
    {
        console.log("je suis appeller")
        this.setState({isConnect:this.props.isConnect})
    }
    //Change the value of login
    loginChange(event)
    {
        
        this.setState({login:event.target.value})
    }
    //Change the value of password
    passwordChange(event)
    {
        this.setState({password:event.target.value})
    }
    //Return a object literal of the form
    getUser()
    {
        return {login:this.state.login,password:this.state.password}
    }
    //send the user created by the form at databases
    postUser()
    {   
        this.props.Connexion(this.getUser().login,this.getUser().password)
        this.setState({isConnect:this.props.isConnect})
        
       
    }

} 
export default ConnexionComponent