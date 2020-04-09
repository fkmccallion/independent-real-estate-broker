import React from 'react'
import { NavLink } from 'react-router-dom';

class NavbarAdmin extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/admin/agents/new"
          exact
        >Add Agent</NavLink>&nbsp;
        <NavLink
          to="/admin/properties/new"
          exact
        >Add Property</NavLink>&nbsp;
        <NavLink
          to="/admin/images/new"
          exact
        >Add Property Image</NavLink>&nbsp;
        <NavLink
          to="/admin/agents/update"
          exact
        >Update Agent</NavLink>&nbsp;
        <NavLink
          to="/admin/properties/update"
          exact
        >Update Property</NavLink>&nbsp;
        <NavLink
          to="/admin/agents/delete"
          exact
        >Delete Agent</NavLink>
      </div>
    )
  }
}

export default NavbarAdmin;
