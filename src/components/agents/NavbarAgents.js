import React from 'react'
import { NavLink } from 'react-router-dom';

class NavbarAgents extends React.Component {

  render() {

    const renderAgents = Object.keys(this.props.agents).map(agentID =>
      <NavLink to={`/agents/${agentID}`}><img className="agent-image" src={this.props.agents[agentID].img_url} alt={this.props.agents[agentID].first_name} /></NavLink>
    );

    return (
      <div>
        {renderAgents}
      </div>
    )
  }
}

export default NavbarAgents;