import React from 'react'
import { NavLink } from 'react-router-dom';

class NavbarAdmin extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/admin/new"
          exact
        >Add Agent</NavLink>
        <NavLink
          to="/admin/update"
          exact
        >Update Agent</NavLink>
        <NavLink
          to="/admin/delete"
          exact
        >Delete Agent</NavLink>
      </div>
    )
  }
}

export default NavbarAdmin;
