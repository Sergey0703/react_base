import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Add} from './pages/Add';
import Admin from './pages/Admin';

import {TrainWords} from './pages/TrainWords'
import {TrainWords2} from './pages/TrainWords2'

import {Navbar} from "./components/Navbar";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {FirebaseState} from "./context/firebase/FirebaseState";


function App() {
  return (
      <FirebaseState>
      <AlertState>
      <BrowserRouter>
        <Navbar/>
    <div className="container pt-4" >
      <Alert/>
      <Switch>
        <Route path ="/" exact component={TrainWords}/>
        <Route path ="/trainwords2" exact component={TrainWords2}/>
        <Route path ="/home" exact component={Home}/>
        <Route path ="/add" exact component={Add}/>
        <Route path ="/admin" exact component={Admin}/>
        <Route path ="/about" exact component={About}/>

      </Switch>
    </div>
      </BrowserRouter>
        </AlertState>
      </FirebaseState>
  );
}

export default App;
