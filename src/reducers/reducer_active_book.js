//State argument is not application state | only state this reducer is reponsible for
export default function(state = null, action) { //Always called when an action occurs
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  //This becomes undefined if the app first starts up | need to default state to null or another value
  return state;
}
