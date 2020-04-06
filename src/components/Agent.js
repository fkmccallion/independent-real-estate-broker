import React from 'react'

const Agent = props => {

  return (
    <div>
      <img className="agent-image" src={ props.agent.img_url ?  props.agent.img_url : "https://firebasestorage.googleapis.com/v0/b/independent-real-estate-broker.appspot.com/o/images%2Fsemper-fi.gif?alt=media&token=d7da8996-c21f-40c0-843d-c7e26a4a688e" } alt={`${props.agent.first_name} ${props.agent.last_name} ${props.agent.bre_number}`} />
      <p>
        <b>{props.agent.first_name + " " + props.agent.last_name}</b>
      </p>
    </div>
  )
}

export default Agent
