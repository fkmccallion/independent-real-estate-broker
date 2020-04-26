import React, { Component } from 'react';

import Agent from '../agents/Agent';
import Testimonial from '../testimonials/Testimonial'
import PropertiesList from '../properties/PropertiesList'


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
          <Agent agent={this.determineIfRoutedFromHomePage()} />
          {this.props.testimonials.find(testimonial => testimonial.agent_id === this.determineIfRoutedFromHomePage().id) ? <span className="agent-header-text">Agent Testimonial:</span> : null}
          {this.props.testimonials.filter(testimonial => testimonial.agent_id === this.determineIfRoutedFromHomePage().id).map(testimonial =>
            <Testimonial testimonial={testimonial} />
          )}
          <PropertiesList images={this.props.images} properties={this.filteredPropertiesByAgent(this.determineIfRoutedFromHomePage().id)} />
        </div>
      )
    }

}

export default AgentDetails;
