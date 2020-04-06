import React from 'react'
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/agents"
          exact
        >Agents</NavLink>
        <NavLink
          to="/properties"
          exact
        >Properties</NavLink>
        <NavLink
          to="/admin"
          exact
        >Admin</NavLink>
      </div>
    )
  }
}

export default Navbar;
