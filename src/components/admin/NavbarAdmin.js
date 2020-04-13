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
          to="/admin/agents/update"
          exact
        >Update Agent</NavLink>&nbsp;
        <NavLink
          to="/admin/agents/delete"
          exact
        >Delete Agent</NavLink>&nbsp;
        <NavLink
          to="/admin/properties/new"
          exact
        >Add Property</NavLink>&nbsp;
        <NavLink
          to="/admin/properties/update"
          exact
        >Update Property</NavLink>&nbsp;
        <NavLink
          to="/admin/properties/delete"
          exact
        >Delete Property</NavLink>&nbsp;
        <NavLink
          to="/admin/images/new"
          exact
        >Add Image</NavLink>&nbsp;
        <NavLink
          to="/admin/images/delete"
          exact
        >Delete Image</NavLink>&nbsp;
        <NavLink
          to="/admin/testimonials/new"
          exact
        >Add Testimonial</NavLink>&nbsp;
        <NavLink
          to="/admin/testimonials/delete"
          exact
        >Delete Testimonial</NavLink>
      </div>
    )
  }
}

export default NavbarAdmin;
