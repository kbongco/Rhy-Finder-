import React from 'react';
import { Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation'
import Locations from './Locations'

function App() {
  return (
    <>
 
        <Navigation />

      <h1>Rhy-Finder</h1>
      <Route path='/locations' exact>
        <Locations/>
      </Route>
    </>
  );
}

export default App;
