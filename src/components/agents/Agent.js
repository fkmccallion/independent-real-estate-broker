import React from 'react'
import '../../agents.css';

const Agent = agent => {
  return (
    <div>

      <img className="agent-image" src={ agent.agent.img_url ?  agent.agent.img_url : "https://firebasestorage.googleapis.com/v0/b/independent-real-estate-broker.appspot.com/o/images%2Fsemper-fi.gif?alt=media&token=d7da8996-c21f-40c0-843d-c7e26a4a688e" } alt={`${agent.agent.first_name} ${agent.agent.last_name} ${agent.agent.bre_number}`} />
      <p>
        <b>{agent.agent.first_name + " " + agent.agent.last_name}</b><br />
        <i>BRE Number:</i> {agent.agent.bre_number}
      </p>
      <p>
        <i>{agent.agent.biography}</i>
      </p>
      <p>
        {agent.agent.phone}<br />
      <a href={`mailto:${agent.agent.email}`}>{agent.agent.email}</a><br />
      </p>


    </div>
  )
}

export default Agent
