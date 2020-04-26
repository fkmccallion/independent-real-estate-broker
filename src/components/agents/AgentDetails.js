import React from 'react'

// Bootstrap style
import Image from 'react-bootstrap/Image'

const AgentDetails = agent => {
  return (
    <div className="agent-card">
      <Image roundedCircle className="agent-image"  src={ agent.agent.img_url ?  agent.agent.img_url : "https://firebasestorage.googleapis.com/v0/b/independent-real-estate-broker.appspot.com/o/images%2Fsemper-fi.gif?alt=media&token=d7da8996-c21f-40c0-843d-c7e26a4a688e" } alt={`${agent.agent.first_name} ${agent.agent.last_name} ${agent.agent.bre_number}`} />
      <span className="agent-contact-info">
          <b>{agent.agent.first_name + " " + agent.agent.last_name}</b><br />
          {agent.agent.title}<br />
          BRE Number: {agent.agent.bre_number}
          <p>
            {agent.agent.phone}<br />
            <a href={`mailto:${agent.agent.email}`}>{agent.agent.email}</a><br />
          </p>
      </span>
      <div className="agent-bio">
        <i >{agent.agent.biography}</i>
      </div>
      <hr />
    </div>

  )
}

export default AgentDetails
