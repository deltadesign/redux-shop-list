import { connect } from 'react-redux';
import { toggleComplete } from '../actions';
import {removeItem } from '../actions';
import ListContainer from './ListContainer';

function getVisibleItems (items, filter) {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return items.filter(item => item.completed)
    case 'SHOW_ACTIVE':
      return items.filter(item => !item.completed)
    case 'SHOW_ALL':
    default: 
      console.log(items)
      // localStorage.setItem("listItems", JSON.stringify(items)) // need to think about local storage
      return items
  }
}

function mapStateToProps(state) {
  return {
    listItems: getVisibleItems(state.items, state.visibilityFilter)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    mark: id => {
      dispatch(toggleComplete(id))
    },
    remove: id => {
      dispatch(removeItem(id))
    }
  }
}

const VisibleItems = connect(mapStateToProps, mapDispatchToProps) (ListContainer) // send props to list container

export default VisibleItems