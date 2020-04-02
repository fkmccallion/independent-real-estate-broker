export default (state = { agents: [], requesting: false}, action) => {

  const BASE_URL = "http://localhost:3000"
  const AGENTS_URL = `${BASE_URL}/agents`

  function addAgent() {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        'first_name': action.agent.first_name,
        'last_name': action.agent.last_name,
        'biography': action.agent.biography,
        'phone': action.agent.phone,
        'email': action.agent.email,
        'bre_number': action.agent.bre_number
      })
    };
    fetch(AGENTS_URL, configObj);
  }

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
      addAgent();
      return {
        ...state,
        agents: action.agent,
        requesting: false
      }
    default:
      return state;
  }
}
