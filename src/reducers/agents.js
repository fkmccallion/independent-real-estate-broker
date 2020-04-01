export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_AGENT':
      return [...state, action.agent];
    default:
      return state;
  }
}
