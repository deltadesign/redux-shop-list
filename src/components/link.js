import React from 'react';
import Nav from 'react-bootstrap/Nav';




class Link extends React.Component {

  render () {
    return (
      <>
        <Nav.Item>
          <Nav.Link eventKey = {this.props.filter} >{this.props.filter}</Nav.Link>
        </Nav.Item>
      </>
    );
  }
}

export default Link;