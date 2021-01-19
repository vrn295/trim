import React from "react";
import { Link } from "react-router-dom";
import logo from './Media/TRIM-white.png'
import "./Navbar.css";

class Navbar extends React.Component {
  listener = null;
  state = {
    nav:false,
    logo:false
  }
  componentDidMount() {
     window.addEventListener("scroll", this.handleScroll);
   }
   componentWillUnmount() {
      window.removeEventListener('scroll');
    }
   handleScroll= () => {
     if (window.pageYOffset > 200) {
         if(!this.state.nav){
           this.setState({ nav: true });
           this.setState({logo: true});
         }
     }else{
         if(this.state.nav){
           this.setState({ nav: false });
           this.setState({logo: false});
         }
     }

   }
   render(){
  return (
    <div>
    <nav>
      <div className={`${this.state.nav && 'Nav__black'}`}>
        <img id='logo-hidden' className={`${this.state.nav && 'logo'}`}  src={logo} alt="logo"/>
        <div className='nav-list-container'>
        <ul className="nav-ul">
          <Link to="/trim">
            <li className="nav-list">
              <a id="home" className="nav-index" href="# ">
                Home
              </a>
            </li>
          </Link>
          <Link to="/services">
            <li className="nav-list">
              <a className="nav-index" href="# ">
                services
              </a>
            </li>
          </Link>
          <Link to="gallery">
            <li className="nav-list">
              <a className="nav-index" href="# ">
                gallery
              </a>
            </li>
          </Link>
          <Link to="about">
            <li className="nav-list">
              <a className="nav-index" href="# ">
                about
              </a>
            </li>
          </Link>
          <Link to="contact">
            <li className="nav-list">
              <a className="nav-index" href="# ">
                contact
              </a>
            </li>
          </Link>
        </ul>
        </div>
      </div>
      </nav>
      </div>
  
  );
}
}

export default Navbar;
