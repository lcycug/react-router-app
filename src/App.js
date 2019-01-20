import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';

const Header = () => {
  return(
    <div>
      Is's HEADER here.
    </div>
  );
};

const Footer = () => {
  return(
    <div>
      Is's FOOTER here.
      <Link to={'/about'}>Go to About!</Link>
    </div>
  );
};

const About = () => {
  return(
    <div>
      It's ABOUT here.
      <Link to={'/'}>Go Home!</Link>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Route path='/' component={Header} />
          <Route exact path='/about' component={About} />
          <Route path='/' component={Footer} />
      </React.Fragment>
    );
  }
}

export default App;
