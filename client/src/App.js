import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Gasoline from './components/Gasoline';
import Maintenance from './components/Maintenance';
import Mods from './components/Mods';
import Purchase from './components/Purchase';
import TireRotation from './components/TireRotation';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/gasoline' component={Gasoline} />
            <Route exact path='/maintenance' component={Maintenance} />
            <Route exact path='/mods' component={Mods} />
            <Route exact path='/purchase' component={Purchase} />
            <Route exact path='/tires' component={TireRotation} />
          </Switch>
      </div>
    );
  }
}

export default App;
