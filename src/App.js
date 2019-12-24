import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Location from './Components/Location'
import Showcollection from './Components/Showcollection'
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Navigationbar from './Components/Navigationbar';
import Showrestaurant from './Components/Showrestaurant';
import AutoComplete from './Components/AutoComplete';

class App extends Component {

  render() {

    return (
      <div>

        <Navigationbar />
        <Route path='/' component={Location} />
        <Switch>
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
          <Route path='/collection/:id' component={Showcollection} />
          <Route path='/auto' component={AutoComplete} />
          <Route path='/restaurant/:id' component={Showrestaurant} />
        </Switch>
      </div>
    );
  }
}

export default App;