import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Agent from '../agents/Agent';
import Testimonial from '../testimonials/Testimonial'
import Properties from '../../containers/Properties';

// Bootstrap style
import Image from 'react-bootstrap/Image'

class AgentDetails extends Component {


    componentDidMount() {
      if (this.props.hideNav) {
        this.props.hideNav()
      }
    }

    filteredPropertiesByAgent = (agentId) => {
      return this.props.properties.filter(property => property.agent_id === agentId)
    }

    // Selects agent syntax depending if this component is displayed from home page for from properties container
    determineIfRoutedFromHomePage = () => {
      if (this.props.agent) {
        return this.props.agent
      } else {
        return this.props.agents[this.props.agentArrayIndex(this.props.match.params.agentId)]
      }
    }
 
    // Add if statement to stall render until props are populated - empty array evalutates to true so adding .length works
    render() {
      if (!this.props.properties.length || !this.props.images.length || !this.props.agents.length || !this.props.testimonials.length) {
          return <div />
      }

      return (
        <div>
          <span id="redundantAgentInfo">
            <Agent agent={this.determineIfRoutedFromHomePage()} />
            {this.props.testimonials.find(testimonial => testimonial.agent_id === this.determineIfRoutedFromHomePage().id) ? <span className="agent-header-text">Agent Testimonial:</span> : null}
            {this.props.testimonials.filter(testimonial => testimonial.agent_id === this.determineIfRoutedFromHomePage().id).map(testimonial =>
              <Testimonial testimonial={testimonial} />
            )}
          </span>
          <span id="redundantPropertyInfo">
            <Properties agentProperties={this.filteredPropertiesByAgent(this.determineIfRoutedFromHomePage().id)} />
          </span>
        </div>
      )
    }

}

export default AgentDetails;
