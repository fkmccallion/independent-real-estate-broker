import React from 'react';

// Here we add `match` to the arguments so we can access the path information
// in `routerProps` that is passed from MoviesPage.js
const AgentShow = ({match, agents}) => {
  return (
    <div>
          {console.log(match)}

      <h3>{ agents[match.params.agentId].first_name }</h3>

    </div>
  );
}

export default AgentShow;
