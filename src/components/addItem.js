import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: 0,
      item: "",
      completed: false
    }
  
  }

componentDidMount() {
  const ids = Number(localStorage.getItem("ids"));
  this.setState ({
    id: ids
  })
}


//Overwrites state when an item is entered

  changeHandler(e){
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState)
  }


// passes items to state in app.js to be rendered as items and increments listId

  submitHandler(e){
    e.preventDefault();
    let itemId = this.state.id +1
    if (this.state.item === "") {
      return
    }
    this.props.additem(this.state.id,this.state.item, this.state.completed);
    this.setState({
      id: itemId,
      item: "",
      completed: false,
    },() => localStorage.setItem('ids', JSON.stringify(this.state.id)))
  
  }

  render () {
  return (
    
      <Card className="mb-5">
        <Card.Body>

          <Form onSubmit = {(e) => {this.submitHandler(e)}}>

          <input 
            value = {this.state.item} 
            type = "text" name = "item" 
            placeholder="Description" 
            onChange = { (e) => this.changeHandler(e) }>
          </input>

          <Button variant = "warning" type = "submit" className = "ml-2" >Add</Button>

          </Form>

        </Card.Body>
      </ Card>
    );
  }
}

export default Add;
