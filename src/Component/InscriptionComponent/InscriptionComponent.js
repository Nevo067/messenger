import { Component } from "react";


class InscriptionComponent extends Component
{
    constructor(props)
    {
        super(props)
        //init
        this.state = {login:"",password:"",isRegistered:false}
        //bind of method
        this.loginChange = this.loginChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this);
        this.postUser = this.postUser.bind(this);
    }

    render()
    {
        return(
            <div key = {this.state.isRegistered}>
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
                        <input type="button" value="Envoyer" onClick={this.postUser} class="col col-lg form-control btn btn-success" />
                    </div>
                </form>

                {this.state.isRegistered ? 
                <p>Vous etes inscrit.
                 Maintenant connecter-vous</p>:
                <p> vous etes pas enregister</p>
                }
            </div>
        )
    }
    //Change the value of login
    loginChange(event)
    {
        console.log(event)
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
        this.props.addCompte(this.getUser())
        this.setState({isRegistered:true})
    }
}
export default InscriptionComponent;