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
           <span style={{textDecoration: this.props.completed ? 'line-through' : 'none', cursor: 'pointer'}} onClick= {this.props.mark}>
           {this.props.item}
           </span>
        </td>

        <td>
        <Button variant="danger" onClick = {this.props.remove}>Remove</Button>
        </td>

      </tr>
    );
  }
}

export default ListItem;
