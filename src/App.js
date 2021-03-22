import logo from './logo.svg';
import './App.css';
/*don't put {}.that create a error and you can't have access to the store
 https://stackoverflow.com/questions/50532674/redux-mapstatetoprops-not-working
 */
import  MessageControllerComponent  from './Component/ControllerComponent/MessageControllerComponent';

function App() {
  return (
    
    <div>
      <MessageControllerComponent messages ={[]}  />
    </div>
  );
}

export default App;
