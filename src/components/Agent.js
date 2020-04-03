import React from 'react'

const Agent = props => {
  //<img src={require("../imgs/" + props.agent.img_url)} />
  return (

    <div>
      <p>
        <b>{props.agent.first_name + " " + props.agent.last_name}</b>
      </p>
    </div>
  )
}

export default Agent
