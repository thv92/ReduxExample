export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action | an object with a type property
  // Has two values, type and payload (optional)
  return {
    type: 'BOOK_SELECTED', //normally a constant because variables placed in static file
    payload: book //data that describes the action
  };
}

// Have to wire action creator to redux
