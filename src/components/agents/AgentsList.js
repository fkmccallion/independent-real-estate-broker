import React from 'react'
import { Link } from 'react-router-dom';

import Agent from './Agent';

class AgentsList extends React.Component {


  render() {

    const renderAgents = this.props.agents.map(agent =>
      <Link key={agent.id} onClick={this.props.hideNav} to={`/agents/${agent.id}`}>
        <Agent agent={agent} />
      </Link>
    )

    return (
      <div>
        {renderAgents}
      </div>
    )
  }

}

export default AgentsList;
