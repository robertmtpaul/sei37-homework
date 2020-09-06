import React from 'react';
import axios from 'axios';
import {Route, Link, HashRouter as Router} from 'react-router-dom';

import SearchForm from './components/SearchForm'
import SearchCountry from './components/SearchCountry'
import SearchCity from './components/SearchCity'
import SearchLocation from './components/SearchLocation'
import MyAir from './components/MyAir'

import './App.css';

class App extends React.Component{



  render(){
    return(
      <div>
        <h1>Air Quality</h1>

        <Router>
          <nav>
            <Link to='/'>Home</Link> | &nbsp;
            <Link to='/myair'>My Air Quality</Link> | &nbsp;
              <hr/>
          </nav>

          <Route exact path='/' component={SearchForm}/>
          <Route exact path='/search/country/:query' component={SearchCountry}/>
          <Route exact path='/search/city/:query' component={SearchCity}/>
          <Route exact path='/search/location/:query' component={SearchLocation}/>
          <Route exact path='/myair' component={MyAir}/>
        </Router>
      </div>
    );
  }//render
}//class App

export default App
