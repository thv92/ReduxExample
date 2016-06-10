import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {

    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>

      </div>

    );

  }
}


function mapStateToProps(state) {
  return {book : state.activeBook}; //Reducer index.js names it as activeBook
}

export default connect(mapStateToProps)(BookDetail);
