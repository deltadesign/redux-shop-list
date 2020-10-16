import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/table';
import ListItem from './listItem';

class ListContainer extends React.Component {

  render() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.listItems.map((item) => (
             <ListItem key = {item.id} 
              id = {item.id} 
              item = {item.item} 
              completed = {item.completed} 
              remove = {()=> this.props.remove(item.id)}
              mark = {() => this.props.mark(item.id)}
              />
          ))}
        </tbody>
      </Table>
    )
  }
}

export default ListContainer;