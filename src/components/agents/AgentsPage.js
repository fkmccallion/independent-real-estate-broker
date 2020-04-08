import React from 'react';
import { Route } from 'react-router-dom';
import AgentsList from './AgentsList';
import AgentShow from './AgentShow';


const AgentsPage = ({ match, agents }) => (
  <div>
    <AgentsList agents={agents} />
    <Route path={`${match.url}/:agentID`} component={<AgentShow agents={agents} />}/>
  </div>
)

export default AgentsPage
