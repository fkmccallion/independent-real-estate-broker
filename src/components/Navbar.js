import React from 'react'
import { NavLink } from 'react-router-dom';



class Navbar extends React.Component {

  // select element in Properties container and toggle nav and display on/of
  showNav = ()=> {
    const nav = document.getElementById('properties-nav')
    const display = document.getElementById('properties-display')
    if (nav.className) {
      nav.classList.remove('properties-hide')
      display.classList.add('properties-hide')
    }
  }

  render() {
    return (
      <div className="app-navbar">
        <NavLink className="app-navlink"
          to="/"
          exact
        >Home</NavLink>
        <NavLink className="app-navlink"
          to="/agents"
          exact
        >Agents</NavLink>
        <NavLink className="app-navlink"
          onClick={this.showNav}
          to="/properties"
          exact
        >Properties</NavLink>
      </div>
    )
  }
}

export default Navbar;
