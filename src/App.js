import React from 'react'
import Header from './Header/Header.js'
import Home from './Home/Home.js'
import Checkout from './Checkout/Checkout.js'
import { BrowserRouter as  Router,Routes,Route } from "react-router-dom"

function App() {
  return (
  
  <Router>
      <div className='app'>
        <Routes>
             <Route  path="/" element= {<><Header/><Home/></>} />
             <Route  path="/checkout" element= {<><Header/><Checkout/></>} />
        </Routes>
      </div>
  </Router>

  // <div>
  //   <Header/>
  //   <Home/>
  // </div>

  );
}

export default App
