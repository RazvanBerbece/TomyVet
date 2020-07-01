import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/footer";
import Intro from "./Intro/intro";
import Contact from "./Contact/contact";
import AboutUs from "./AboutUs/aboutus";
import AllItems from "./Shop/AllItems/allitems";
/** USED FOR FONTAWESOME ICONS
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faFireAlt } from "@fortawesome/free-solid-svg-icons";
  import { faStoreAlt } from "@fortawesome/free-solid-svg-icons";
*/

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className='wrapper'>
        <Navbar />
        <div className="content">
          <Route exact path="/" component={Intro}/>
          <Route path="/intro" component={Intro}/>
          <Route path="/allitems" component={AllItems}/>
          <Route path="/aboutus" component={AboutUs}/>
          <Route path="/contact" component={Contact}/>
        </div>
        <br />
        <br />
        <Footer />
      </div>
      </HashRouter>
    );
  }
}

export default App;
