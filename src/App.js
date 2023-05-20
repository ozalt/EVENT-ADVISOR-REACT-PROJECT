import React from 'react';
import './App.css'
// import { NavBar } from './components';
import { Hero, Feature, Hiw, Blog, Footer } from './containers';

const App = () => {
  return (
    <div>
      <div className="app">
          {/* <NavBar /> */}
          <Hero />

        <Feature />
        <Hiw />
        <Blog />
        <Footer />
      </div>
    </div>
  )
}

export default App
