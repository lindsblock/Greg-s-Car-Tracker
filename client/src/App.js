import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Gas from './components/Gas';
import Maintenance from './components/Maintenance';
import Mods from './components/Mods';
import Purchase from './components/Purchase';
import TireRotation from './components/TireRotation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/gas' component={Gas} />
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
