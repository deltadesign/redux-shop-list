import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Link from './link';
import { VisibilityFilters } from '../actions';

class NavLinks extends React.Component {

  render () {
    return (

    <Nav variant = "tabs" defaultActiveKey = "All">
          <Link filter={VisibilityFilters.SHOW_ALL}>All</Link>
          <Link filter={VisibilityFilters.SHOW_ACTIVE}>Outstanding</Link>
          <Link filter={VisibilityFilters.SHOW_COMPLETED}>Completed</Link>
    </Nav>

    );
  }
}

export default NavLinks;
