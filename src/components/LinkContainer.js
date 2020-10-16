import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from './link';

function mapStateToProps (state, ownProps) {
  return {
    active: ownProps.filter === state.visbilityFilter
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const LinkContainer = connect(mapStateToProps, mapDispatchToProps) (Link)

export default LinkContainer