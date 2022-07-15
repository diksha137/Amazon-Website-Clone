import React from 'react'
import Header from './Header/Header.js'
import Home from './Home/Home.js'
import Checkout from './Checkout/Checkout.js'
import { BrowserRouter as  Router,Switch,Route } from "react-router-dom"

function App() {
  return (
  
  <Router>
      <div className='app'>
        <Switch>

          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>

          <Route path="/">
            <Header/>
            <Home/>
          </Route>

          
        </Switch>
      </div>
  </Router>

  // <div>
  //   <Header/>
  //   <Home/>
  // </div>

  );
}

export default App
