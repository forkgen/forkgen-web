'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { IndexLink, Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';

class HorizontalMenu extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/" title="Forkgen v0.0.0 Alpha">Forkgen <sup><small>v0.0.0 Alpha</small></sup></IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>          
          <Nav pullRight>
            <NavDropdown className="navbar-right" eventKey={4} title="Developers" id="menu-developers">
              <MenuItem eventKey={4.1} href="//github.com/hegdeashwin/forkgen" target="_blank">Github Home Page</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.2} href="//github.com/hegdeashwin/forkgen/releases" target="_blank">Release Page</MenuItem>
              <MenuItem eventKey={4.3} href="//github.com/hegdeashwin/forkgen/milestones" target="_blank">Milestones</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.4} href="//github.com/hegdeashwin/forkgen/issues" target="_blank">Report Issues</MenuItem>
              <MenuItem eventKey={4.5} href="//github.com/hegdeashwin/forkgen/pulls" target="_blank">Open Pull Requests</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.6} href="//github.com/hegdeashwin/forkgen" target="_blank">About Forkgen</MenuItem>
            </NavDropdown>
            <NavDropdown className="navbar-right" eventKey={5} title="Help" id="menu-help">
              <MenuItem eventKey={5.1} href="//github.com/hegdeashwin/forkgen/wiki" target="_blank">Documentation</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default HorizontalMenu;
