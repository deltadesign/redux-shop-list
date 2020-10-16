import React from 'react';
import Nav from 'react-bootstrap/Nav';
import LinkContainer from './LinkContainer';
import { VisibilityFilters } from '../actions';

class NavLinks extends React.Component {

  render () {
    return (

    <Nav variant = "tabs" defaultActiveKey = "All">
          <LinkContainer filter={VisibilityFilters.SHOW_ALL}>All</LinkContainer>
          <LinkContainer filter={VisibilityFilters.SHOW_ACTIVE}>Outstanding</LinkContainer>
          <LinkContainer filter={VisibilityFilters.SHOW_COMPLETED}>Completed</LinkContainer>
    </Nav>

    );
  }
}

export default NavLinks;
