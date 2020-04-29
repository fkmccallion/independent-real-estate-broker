import React from 'react'
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {

  // select element in Properties container and toggle nav and display on/of
  showPropertiesNav = () => {
    const nav = document.getElementById('properties-nav')
    const display = document.getElementById('properties-display')
    if (nav) {
      nav.classList.remove('properties-hide')
      display.classList.add('properties-hide')
    }
  }

  // select element in Agents container and toggle nav and display on/of
  showAgentsNav = () => {
    const nav = document.getElementById('agents-nav')
    const display = document.getElementById('agents-display')
    if (nav) {
      nav.classList.remove('agent-hide')
      display.classList.add('agent-hide')
    }

    const navProp = document.getElementById('properties-nav')
    const displayProp = document.getElementById('properties-display')
    if (navProp) {navProp.classList.remove('properties-hide')}
    if (displayProp) {displayProp.classList.add('properties-hide')}

    const redundantAgentInfo = document.getElementById('redundantAgentInfo')
    if (redundantAgentInfo) {redundantAgentInfo.classList.add('properties-hide')}

    const redundantPropertyInfo = document.getElementById('redundantPropertyInfo')
    if (redundantPropertyInfo) {redundantPropertyInfo.classList.remove('properties-hide')}
  }

  resetHome = () => {
    const nav = document.getElementById('home-carousel')
    const agentNav = document.getElementById('agent-nav')
    if (nav) {
      nav.classList.remove('home-hide')
      agentNav.classList.remove('home-hide')
    }

    const redundantAgentInfo = document.getElementById('redundantAgentInfo')
    if (redundantAgentInfo) {redundantAgentInfo.classList.add('properties-hide')}

    const redundantPropertyInfo = document.getElementById('redundantPropertyInfo')
    if (redundantPropertyInfo) {redundantPropertyInfo.classList.add('properties-hide')}

    const propertiesDisplay = document.getElementById('properties-display')
    if (propertiesDisplay) {propertiesDisplay.classList.add('properties-hide')}

    const propertiesNav = document.getElementById('properties-nav')
    if (propertiesNav) {propertiesDisplay.classList.remove('properties-hide')}

  }

  render() {
    return (
      <div className="app-navbar">
        <NavLink className="app-navlink"
          onClick={this.resetHome}
          to="/"
          exact
        >Home</NavLink>
        <NavLink className="app-navlink"
          onClick={this.showPropertiesNav}
          to="/properties"
          exact
        >Listings</NavLink>
        <NavLink className="app-navlink"
          onClick={this.showAgentsNav}
          to="/agents"
          exact
        >About</NavLink>
        <NavLink className="app-navlink"
          to="/calculator"
          exact
        >Calculator</NavLink>
      </div>
    )
  }
}

export default Navbar;
