import React from 'react';
//import {BrowserRouter, Route } from 'react-router-dom';
import{BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

const App = () => {
        return (
    <>
  
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  
    </>
  );
}

export default App;
