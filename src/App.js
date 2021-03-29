import logo from './logo.svg';
import './App.css';
import { Route,BrowserRouter as Router,Switch } from "react-router-dom";
/*don't put {}.that create a error and you can't have access to the store
 https://stackoverflow.com/questions/50532674/redux-mapstatetoprops-not-working
 */
import  MessageControllerComponent  from './Component/ControllerComponent/MessageControllerComponent';
import NavbarComponent from './Component/NavbarComponent/NavbarComponent'
import InscriptionControllerComponent from './Component/ControllerComponent/InscriptionControllerComponent'

function App() {
  return (
    
    <div>
    <Router>
    <NavbarComponent />
    <Switch>
      <Route path="/" exact component={MessageControllerComponent}/>
      <Route path ="/inscription">
        <InscriptionControllerComponent />
      </Route>
    </Switch>
      
    </Router>
    </div>
  );
}

export default App;
