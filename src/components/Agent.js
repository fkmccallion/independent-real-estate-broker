import React from 'react'

const Agent = props => {

  return (
    <div>
      <img src={ (props.agent.img_url !== null) ? require("../imgs/" + props.agent.img_url) : require("../imgs/semper-fi.gif") } alt={`${props.agent.first_name} ${props.agent.last_name} ${props.agent.bre_number}`} />
      <p>
        <b>{props.agent.first_name + " " + props.agent.last_name}</b>
      </p>
    </div>
  )
}

export default Agent
