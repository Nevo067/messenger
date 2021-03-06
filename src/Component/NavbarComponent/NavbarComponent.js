import { Component } from "react";
import { Router } from "react-router";
import { Link } from "react-router-dom";
import SearchComponent from './SearchComponent/SearchComponent'

class NavbarComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div class=" row navbar navbar-expand-lg navbar-light bg-light row">
                    <Link class="navbar-brand" to="/">AtomMessenger</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/inscription">Inscription</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/connexion">Connexion</Link>
                            </li>
                        </ul>
                    </div>
                </div>
               
                    { 
                        this.props.isConnected ? 
                        <SearchComponent 
                        comptes = {this.props.comptes} 
                        beginConversation = {this.props.beginConversation}   
                        /> : 
                        <p></p>
                    }
                
            </div>
        )
    }
}
export default NavbarComponent;
