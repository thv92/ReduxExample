import React, {Component} from 'react';
import { connect } from 'react-redux'; //Pull off single property rather than as an object with those properties
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';



//Want to use container when you are trying to connect redux state/data to a view/component
//Container is bonded by application state. Will rerender when application state changes
class BookList extends Component {
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>


            );
    }


    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }
}

//Glue between react and redux
//If application state ever changes, the component will automatically rerender
function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  // Usually returning an object
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as a props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  // Dispatch passes on the actions to all the different reducers across the application
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}


//Need to export the container rather than the BookList Component
//Promote BookList from a component to a container - it needs to know about this dispatch method, selectBook
//Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
