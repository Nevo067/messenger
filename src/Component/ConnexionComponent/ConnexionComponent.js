import { Component } from "react";
class ConnexionComponent extends Component
{
    constructor(props)
    {
        super(props)
        //init
        this.state = {login:"",password:"",user:this.props.user}
        //bind of method
        this.loginChange = this.loginChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this);
        this.postUser = this.postUser.bind(this);
    }

    render()
    {
        return (
            <div>
            <form>
                <div class="form-group row">
                    <label for="login" class="col col-3" >Login</label>
                    <input id="login" value={this.state.login} class="col col-lg form-control-lg" onChange={this.loginChange} type="text" />
                </div>
                <div class="form-group row">
                    <label for="password" class="col col-3">Password</label>
                    <input id="password" value={this.state.password} class="col col-lg form-control-lg" onChange={this.passwordChange} type="text" />
                </div>
                <div class="row align-self-center ">
                    <input type="button" value="Connexion" onClick={this.postUser} class="col col-lg form-control btn btn-success" />
                </div>
                <p>Vous etes connecter  </p>
            </form>
            </div>
        )
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
    //send the user created by the form 
    postUser()
    {   
        this.props.Connexion(this.getUser().login,this.getUser.password)
    }

} 
export default ConnexionComponent