import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import AddItem from './components/addItem';
import ListContainer from './components/ListContainer';
import NavLink from './components/navLinks'

// import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listItems: []
    };
  }

  componentDidMount() {
    const listItems = localStorage.getItem("list");
    this.setState(
      { listItems: JSON.parse(listItems) || [] }
    )
  }

 
  updateList(id, item, completed) {
    const newItem = {id, item, completed}
    this.setState((state) => ({
      listItems: state.listItems.concat(newItem)
    }), () => localStorage.setItem('list', JSON.stringify(this.state.listItems)))
  }

  removeHandler(id) {
    const newState = this.state.listItems.filter((item) => item.id !== id)
    this.setState({ listItems: newState } , () => localStorage.setItem('list', JSON.stringify(this.state.listItems)))
  }

  toggleCompleted(id) {
    const newState = this.state.listItems.map((item) => {
      if(item.id === id) {
        item.completed = !item.completed
        return item  
      } 
        return item 
    })
      this.setState((state) => ({ listItems: newState }), () => localStorage.setItem('list', JSON.stringify(this.state.listItems)))
    }

    linkClick (filter) {
      console.log(filter)
      const items = JSON.parse(localStorage.getItem("list"));
      let newState = [];

      switch(filter) {
        case "Purchased" :
          newState = items.filter((item) => item.completed === true)
          this.setState({listItems: newState})
        break;
        case "Outstanding" :
          newState = items.filter((item) => item.completed !== true)
          this.setState({listItems: newState})
        break;
        default: 
          this.setState({listItems: items})
        break;
      }
    }

  render () {
  return (
     <> 
      <Container>
        {/* <pre>{JSON.stringify(this.state)}</pre> */}

        <h1>Shopping List</h1>

        <AddItem  additem = {(id, item, completed) => this.updateList(id, item, completed)}/>

        <NavLink linkClick = { (filter) => this.linkClick(filter) } />

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
