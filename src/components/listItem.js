import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class ListItem extends React.Component {
  render () {
  return (
    
      <tr> 

        <td>
        {this.props.id}
        </td>

        <td>
        {this.props.item}
        </td>

        <td>
        <Button variant="danger">Remove</Button>
        </td>

      </tr>
    );
  }
}

export default ListItem;
