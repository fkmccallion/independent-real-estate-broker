import React from 'react'
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
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
          to="/properties"
          exact
        >Properties</NavLink>
      </div>
    )
  }
}

export default Navbar;
