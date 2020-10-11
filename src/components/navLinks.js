import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Link from './link';




class NavLink extends React.Component {

  render () {
    return (

  <Nav variant = "tabs" defaultActiveKey = "All">
    <Link filter = "All" />
    <Link filter = "Outstanding" />
    <Link filter = "Purchased" />
  </Nav>

    );
  }
}

export default NavLink;
