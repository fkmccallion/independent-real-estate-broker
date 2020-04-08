import React from 'react';
import { NavLink } from 'react-router-dom';

const AgentsList = ({ agents }) => {
  const renderAgents = Object.keys(agents).map(agentID =>
    <NavLink key={agentID} to={`/agents/${agentID}`}>{agents[agentID].first_name}</NavLink>
  );

  return (
    <div>
      {renderAgents}
    </div>
  );
};

export default AgentsList;
