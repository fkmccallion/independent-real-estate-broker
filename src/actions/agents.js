const BASE_URL = "http://localhost:3000"
const AGENTS_URL = `${BASE_URL}/agents`

export const addAgent = agent => {

  function addAgent() {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        'first_name': agent.first_name,
        'last_name': agent.last_name,
        'biography': agent.biography,
        'phone': agent.phone,
        'email': agent.email,
        'bre_number': agent.bre_number,
        'img_url': agent.img_url ? agent.img_url : "https://firebasestorage.googleapis.com/v0/b/independent-real-estate-broker.appspot.com/o/images%2Fsemper-fi.gif?alt=media&token=676a86b1-5bb6-4911-8834-694b23a6630c"
      })
    };
    fetch(AGENTS_URL, configObj);
  }

  addAgent()

  return {
    type: 'ADD_AGENT',
    agent
  };

};

export const updateAgent = agent => {

  function updateAgent() {
    let configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        'id': agent.id,
        'first_name': agent.first_name,
        'last_name': agent.last_name,
        'biography': agent.biography,
        'phone': agent.phone,
        'email': agent.email,
        'bre_number': agent.bre_number,
        'img_url': agent.img_url
      })
    };
    fetch(AGENTS_URL + `/${agent.id}`, configObj);
  }

  updateAgent()

  return {
    type: 'UPDATE_AGENT',
    agent
  }

}

export const deleteAgent = agent_id => {

  function deleteAgent() {
    let configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        'id': agent_id.id
      })
    };
    fetch(AGENTS_URL + `/${agent_id.id}`, configObj);
  }

  deleteAgent()

  return {
    type: 'DELETE_AGENT',
    agent_id
  }

}

export function fetchAgents() {

  return (dispatch) => {
    dispatch({ type: 'START_ADDING_AGENTS_REQUEST' });
    fetch(AGENTS_URL)
      .then(response => response.json())
      .then(agents => dispatch({ type: 'POPULATE_AGENTS', agents }));
  };
}
