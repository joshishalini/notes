import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "../components/Home"
import Navbar from '../components/Navbar';
import New from '../components/New';

//Css and js Import
import '../../assets/stylesheets/application.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  render() {
    return (
      <div>
      	<Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/keeps/new" component={New} />
        </Switch>
      </div>
    );
  }
}
export default App;