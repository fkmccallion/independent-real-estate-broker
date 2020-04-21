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
        // add new agent to existing state
        agents: [...state.agents, action.agents[action.agents.length - 1]],
        requesting: false
      }
    case 'UPDATE_AGENT':
      return {
        // map through and replace updated agent in state
        agents: state.agents.map(agent => (agent.id === action.agent.id) ? action.agent : agent),
        requesting: false
      }
    case 'DELETE_AGENT':
      // splice out deleted agent from state
      let identifiedAgentIndexInArray = state.agents.indexOf(state.agents.find(agent => agent.id === action.agent.id))
      state.agents.splice(identifiedAgentIndexInArray, 1)
      return {
        agents: state.agents
      }

    default:
      return state;
  }

}
