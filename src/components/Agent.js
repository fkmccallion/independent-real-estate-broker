import React from 'react'

const Agent = props => {
  //<img src={require("../imgs/" + props.agent.img_url)} />
  return (

    <div>

      <p>

        <h2>{props.agent.first_name + " " + props.agent.last_name}</h2>
      </p>
    </div>
  )
}

export default Agent
