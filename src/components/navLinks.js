import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Link from './link';




class NavLink extends React.Component {

  render () {
    return (

  <Nav variant = "tabs" defaultActiveKey = "All">
    <Link filter = "All" linkClick = { (filter) => this.props.linkClick(filter) }/>
    <Link filter = "Outstanding" linkClick = { (filter) => this.props.linkClick(filter) } />
    <Link filter = "Purchased" linkClick = { (filter) => this.props.linkClick(filter) } />
  </Nav>

    );
  }
}

export default NavLink;
