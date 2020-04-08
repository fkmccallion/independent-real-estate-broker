import React from 'react'
import '../../agents.css';

const Agent = ({match, agents}) => {

  return (
    <div>
      <img className="agent-image" src={ agents[match.params.agentId].img_url ?  agents[match.params.agentId].img_url : "https://firebasestorage.googleapis.com/v0/b/independent-real-estate-broker.appspot.com/o/images%2Fsemper-fi.gif?alt=media&token=d7da8996-c21f-40c0-843d-c7e26a4a688e" } alt={`${agents[match.params.agentId].first_name} ${agents[match.params.agentId].last_name} ${agents[match.params.agentId].bre_number}`} />
      <p>
        <b>{agents[match.params.agentId].first_name + " " + agents[match.params.agentId].last_name}</b>
      </p>

    </div>
  )
}

export default Agent
