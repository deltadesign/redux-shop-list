import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import AddItem from './components/addItem';
import ListItem from './components/listItem';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listItems: []
    };
  }

  createList() {
    return this.state.listItems.map((item,i) => (
      <ListItem key = {i} id = {item.id} item = {item.item} />
    ) )
  }


  updateList(id, item) {
    const newItem = {id, item}
    this.setState((state) => ({
      listItems: state.listItems.concat(newItem)
    }))
  }

  render () {
  return (
     <> 
      <Container>
        <pre>{JSON.stringify(this.state)}</pre>

        <h1>Shopping List</h1>

        <AddItem  additem = {(id, item) => this.updateList(id, item)}/>

        {this.createList()}

      </Container>
    </>
  );
}
}

export default App;
