const BASE_URL = "http://localhost:3000"
const AGENTS_URL = `${BASE_URL}/agents`

export const addAgent = agent => {

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      'first_name': agent.first_name,
      'last_name': agent.last_name,
      'title': agent.title,
      'biography': agent.biography,
      'phone': agent.phone,
      'email': agent.email,
      'bre_number': agent.bre_number,
      'img_url': agent.img_url ? agent.img_url : "https://firebasestorage.googleapis.com/v0/b/independent-real-estate-broker.appspot.com/o/images%2Fsemper-fi.gif?alt=media&token=676a86b1-5bb6-4911-8834-694b23a6630c"
    })
  };

  return (dispatch) => {
    fetch(AGENTS_URL, configObj)
      .then(response => response.json())
      .then(agents => {
        dispatch({ type: 'ADD_AGENT', agents })
      });
  };

};

export const updateAgent = agent => {

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
      'title': agent.title,
      'biography': agent.biography,
      'phone': agent.phone,
      'email': agent.email,
      'bre_number': agent.bre_number,
      'img_url': agent.img_url
    })
  };

  return (dispatch) => {
    fetch(AGENTS_URL + `/${agent.id}`, configObj)
      .then(response => response.json())
      .then(agent => {
        dispatch({ type: 'UPDATE_AGENT', agent })
      });
  };

}

export const deleteAgent = agent_id => {

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

  return (dispatch) => {
    fetch(AGENTS_URL + `/${agent_id.id}`, configObj)
      .then(response => response.json())
      .then(agent => {
        dispatch({ type: 'DELETE_AGENT', agent })
      });
  };

}

export function fetchAgents() {

  return (dispatch) => {
    fetch(AGENTS_URL)
      .then(response => response.json())
      .then(agents => dispatch({ type: 'POPULATE_AGENTS', agents }));
  };
}
