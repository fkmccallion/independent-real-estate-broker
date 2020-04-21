export default (state = { agents: [], requesting: false}, action) => {

  switch (action.type) {
    case 'START_ADDING_AGENTS_REQUEST':
      return {
        ...state,
        agents: [...state.agents],
        requesting: true
      }
    case 'POPULATE_AGENTS':
      return {
        ...state,
        agents: action.agents,
        requesting: false
      }
    case 'ADD_AGENT':
      return {
        ...state
      }
    case 'UPDATE_AGENT':
      return {
        ...state
      }
    case 'DELETE_AGENT':
      return {
        ...state
      }
    default:
      return state;
  }

}
