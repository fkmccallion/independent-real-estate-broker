import React from 'react'

const Agent = props => {

  return (

    <div>

      <p>
        <img src={require("../imgs/" + props.agent.img_url)} />
        <h2>{props.agent.first_name + " " + props.agent.last_name}</h2>
      </p>
    </div>
  )
}

export default Agent
