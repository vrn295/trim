import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Header from "./Header/Header";
import Services from "./Services/Services";
import GalleryComp from "./Gallery/Gallery";
import About from "./About/About";
import ContactUs from "./ContactUs/ContactUs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Header} />
            <Route path="/services" exact component={Services} />
            <Route path="/gallery" exact component={GalleryComp} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={ContactUs} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
