import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import AddItem from './components/addItem';
// import ListItem from './components/listItem';
import ListContainer from './components/ListContainer';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listItems: []
    };
  }

 
  updateList(id, item, completed) {
    const newItem = {id, item, completed}
    this.setState((state) => ({
      listItems: state.listItems.concat(newItem)
    }))
  }

  removeHandler(id) {
    const newState = this.state.listItems.filter((item) => item.id !== id)
    this.setState({
      listItems: newState
    })
  }

  toggleCompleted(id) {
    const newState = this.state.listItems.map((item) => {
      if(item.id === id) {
        item.completed = !item.completed
        return item  
      } 
        return item 
    })
      this.setState((state) => ({
        listItems: newState
      }))
    }

  render () {
  return (
     <> 
      <Container>
        <pre>{JSON.stringify(this.state)}</pre>

        <h1>Shopping List</h1>

        <AddItem  additem = {(id, item, completed) => this.updateList(id, item, completed)}/>

        <ListContainer 
          listItems = {this.state.listItems} 
          removeButton ={(id) => this.removeHandler(id)} 
          markClick = {(id) => this.toggleCompleted(id)}
        />
        
      </Container>
    </>
  );
}
}

export default App;
