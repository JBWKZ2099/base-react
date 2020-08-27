import React from "react";
import { Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
// import $ from 'jquery';

class Header extends React.Component {
  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }
  render() {
    return(
      <Navbar bg="light" expand="lg">
        <div className="container nb-container m-auto">
          <Link className="navbar-brand" to="/">
            <img className="img-fluid d-block m-auto" src="http://placehold.it/200x50.svg?text=React" alt="React-Bootstrap"/>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav ml-auto">
              <li className={"nav-item " + (this.getNavLinkClass("/"))}>
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className={"nav-item " + (this.getNavLinkClass("/contacto"))}>
                <Link to="/contacto" className="nav-link">Contacto</Link>
              </li>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </ul>

            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

Header = withRouter(Header);
export default Header;