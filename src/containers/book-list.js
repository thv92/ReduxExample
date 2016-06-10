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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}


//Need to export the container rather than the BookList Component
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
