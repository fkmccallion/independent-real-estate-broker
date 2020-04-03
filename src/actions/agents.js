export const addAgent = agent => {
  return {
    type: 'ADD_AGENT',
    agent
  };
};

export const updateAgent = agent => {
  return {
    type: 'UPDATE_AGENT',
    agent
  }
}

export function fetchAgents() {
  const BASE_URL = "http://localhost:3000"
  const AGENTS_URL = `${BASE_URL}/agents`

  return (dispatch) => {
    dispatch({ type: 'START_ADDING_AGENTS_REQUEST' });
    fetch(AGENTS_URL)
      .then(response => response.json())
      .then(agents => dispatch({ type: 'POPULATE_AGENTS', agents }));
  };
}
