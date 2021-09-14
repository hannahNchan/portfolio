import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";

import Home from './Home';
import Blog from './Blog';
import Resume from './Resume';
import MyOffer from './MyOffer';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';
import Creations from './Creations';

const Content = () => {
  return (
    <div className="hannah-content">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
        <Route path="/resume">
          <Resume/>
        </Route>
        <Route path="/my-offer">
          <MyOffer/>
        </Route>
        <Route path="/portfolio">
          <Portfolio/>
        </Route>
        <Route path="/contact-me">
          <ContactMe/>
        </Route>
        <Route path="/creations">
          <Creations/>
        </Route>
      </Switch>
    </div>
  )
}

export default Content
