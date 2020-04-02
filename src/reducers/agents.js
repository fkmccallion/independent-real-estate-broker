export default (state = [], action) => {

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
    case 'ADD_AGENT':
      addAgent();
      return [...state, action.agent];
    default:
      return state;
  }
}
