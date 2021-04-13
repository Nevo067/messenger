import { Component } from "react";
import { Router } from "react-router";
import { Link } from "react-router-dom";

class NavbarComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            
                <div class="navbar navbar-expand-lg navbar-light bg-light row">
                    <a class="navbar-brand" href="#">AtomMessenger</a>
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
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
        )
    }
}
export default NavbarComponent;
