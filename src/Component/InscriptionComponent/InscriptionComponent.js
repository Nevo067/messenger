import { Component } from "react";


class InscriptionComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {login:"",password:""}
    }

    render()
    {
        return(
            <form>

                <div class="form-group row">
                    <label for="login" class="col col-3" >Login</label>
                    <input id="login" value={this.state.password} class="col col-lg form-control-lg" onChange={this.loginChange} type="text"/>
                </div>
                <div class="form-group row">
                    <label for="password" class="col col-3">Password</label>
                    <input id="password" value={this.state.password} class="col col-lg form-control-lg" onChange={this.loginChange} type="text"/>
                </div>
                <div class="row align-self-center ">
                    <input type="button" value="Envoyer" class="col col-lg form-control btn btn-success"/>
                </div>
            </form>
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
    getUser()
    {
        return {login:this.state.login,password:this.state.password}
    }
}
export default InscriptionComponent;