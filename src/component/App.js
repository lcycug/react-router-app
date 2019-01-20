import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Menu from "./Menu";
// import Switch from "react-router-dom/es/Switch";

const Header = () => {
  return <div>Is's HEADER here.</div>;
};

const Footer = () => {
  return (
    <div>
      Is's FOOTER here.
      <Link to={"/react-router-app/about"}>Go to About!</Link>
    </div>
  );
};

const About = () => {
  return (
    <div>
      It's ABOUT here.
      <Link to={"/react-router-app"}>Go Home!</Link>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" component={Header} />
        <Route path="/" component={Menu} />
        <Route exact path="/react-router-app/about" component={About} />
        <Route path="/" component={Footer} />
      </React.Fragment>
    );
  }
}

export default App;
