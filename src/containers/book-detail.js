import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {

    return (


    );

  }
}


function mapStateToProps(state) {
  return {book : state.activeBook}; //Reducer index.js names it as activeBook
}

export default connect(mapStateToProps)(BookDetail);
