import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/table';
import ListItem from './listItem';

class ListContainer extends React.Component {


  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.listItems.map((item,i) => (
             <ListItem key = {i} id = {item.id} item = {item.item} completed = {item.completed} />
          ))}
        </tbody>
      </Table>
    )
  }
}

export default ListContainer;