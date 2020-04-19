import React from 'react'
import { NavLink } from 'react-router-dom';

// Bootstrap style
import Nav from 'react-bootstrap/Nav'

class NavbarAdmin extends React.Component {
  render() {
    return (
      <div>
        <Nav className="justify-content-center" variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link>
              <NavLink className="admin-font-size" to="/admin/agents/new" exact>Add Agent</NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink className="admin-font-size" to="/admin/agents/update" exact>Update Agent</NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink className="admin-font-size" to="/admin/agents/delete" exact>Delete Agent</NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink className="admin-font-size" to="/admin/properties/new" exact>Add Property</NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink className="admin-font-size" to="/admin/properties/update" exact>Update Property</NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink className="admin-font-size" to="/admin/properties/delete" exact>Delete   Property</NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink className="admin-font-size" to="/admin/images/new" exact>Add Image</NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink className="admin-font-size" to="/admin/images/delete" exact>Delete Image</NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink className="admin-font-size" to="/admin/testimonials/new" exact>Add Testimonial</NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink className="admin-font-size" to="/admin/testimonials/delete" exact>Delete Testimonial</NavLink>
            </Nav.Link>
          </Nav.Item>
        </Nav>




      </div>
    )
  }
}

export default NavbarAdmin;
