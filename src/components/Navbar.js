import React from 'react'
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {

  // select element in Properties container and toggle nav and display on/of
  showPropertiesNav = ()=> {
    const nav = document.getElementById('properties-nav')
    const display = document.getElementById('properties-display')
    if (nav) {
      nav.classList.remove('properties-hide')
      display.classList.add('properties-hide')
    }
  }

  // select element in Agents container and toggle nav and display on/of
  showAgentsNav = ()=> {
    const nav = document.getElementById('agents-nav')
    const display = document.getElementById('agents-display')
    if (nav) {
      nav.classList.remove('agent-hide')
      display.classList.add('agent-hide')
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
          onClick={this.showAgentsNav}
          to="/agents"
          exact
        >Agents</NavLink>
        <NavLink className="app-navlink"
          onClick={this.showPropertiesNav}
          to="/properties"
          exact
        >Properties</NavLink>
        <NavLink className="app-navlink"
          to="/calculator"
          exact
        >Calculator</NavLink>
      </div>
    )
  }
}

export default Navbar;
