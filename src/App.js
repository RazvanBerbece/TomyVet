import React, { setGlobal, getGlobal } from "reactn";

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
import Cart from "./Cart/cart";

/**
 * Saving the current state of the shopping cart
 * TODO COOKIE PROMPT
 *  */ 
import Cookies from 'universal-cookie';
const cookies = new Cookies();

setGlobal({
  shoppingCart: []
});
                    
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shoppingCartItemsFromCookie: []
    }
    cookies.set('shoppingCart', undefined, { path: '/' });
  }

  render() {
    return (
      <>
        <HashRouter>
        <div className='wrapper'>
          <Navbar />
          <div className="content">
            <Route exact path="/" component={Intro}/>
            <Route path="/intro" component={Intro}/>
            <Route path="/allitems" component={AllItems}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/cart" component={Cart}/>
          </div>
          <br />
          <br />
          <Footer />
        </div>
        </HashRouter>
      </>
    );
  }
}

export default App;
