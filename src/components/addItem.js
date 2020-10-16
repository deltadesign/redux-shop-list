import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import { addItem } from '../actions';
import { connect } from 'react-redux';


class Add extends React.Component {


  render () {
    let input;
    return (
    
      <Card className="mb-5">
        <Card.Body>

          <Form onSubmit = { e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return 
            }
              this.props.dispatch(addItem(input.value))
              input.value = ''
          }}
          >

          <input ref = {node => {input = node}} />
          
          <Button variant = "warning" type = "submit" className = "ml-2" >Add</Button>

          </Form>

        </Card.Body>
      </ Card>
    );
  }
}

export default  connect () (Add);
