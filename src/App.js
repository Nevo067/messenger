import logo from './logo.svg';
import './App.css';
import { Route,BrowserRouter as Router,Switch } from "react-router-dom";
/*don't put {}.that create a error and you can't have access to the store
 https://stackoverflow.com/questions/50532674/redux-mapstatetoprops-not-working
 */
import  MessageControllerComponent  from './Component/ControllerComponent/MessageControllerComponent';
import NavbarComponentController from './Component/ControllerComponent/NavbarControllerComponent'
import InscriptionControllerComponent from './Component/ControllerComponent/InscriptionControllerComponent'
import ConnexionControllerComponent from './Component/ControllerComponent/ConnexionControllerComponent'

function App() {
  return (
    
    <div >
    <Router>
    <NavbarComponentController />
    <Switch>
      <Route path="/" exact component={MessageControllerComponent}/>
      <Route path ="/inscription">
        <InscriptionControllerComponent />
      </Route>
      <Route path ="/connexion">
        <ConnexionControllerComponent key="ControllerConnexion" />
      </Route>
    </Switch>
      
    </Router>
    </div>
  );
}

export default App;
