import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: BooksReducer //Global application state called books with value = array of books
});

export default rootReducer;
