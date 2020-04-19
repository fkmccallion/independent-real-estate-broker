import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTestimonial } from '../../actions/testimonials';

class TestimonialDelete extends Component {

  state = {
    agent_id: 0,
    selected_testimonial: {},
    testimonials: []
  }

  handleSelection = event => {
    if (event.target.value !== "")
    {
      document.getElementById("adminTestimonialDisplay").classList.remove("admin-hide")
      document.getElementById("submitPane").classList.add("admin-hide")
      let selectedAgent = this.props.agents.find(agent => agent.id === parseInt(event.target.value, 10))
      let selectedAgentTestimonials = this.props.testimonials.filter(testimonial => testimonial.agent_id === selectedAgent.id)
      this.setState({
        agent_id: selectedAgent.id,
        testimonials: selectedAgentTestimonials
      })
    } else {
      this.setState({
        agent_id: 0
      });
    }
  }

  confirmSubmitPane = (event, testimonial) => {
    document.getElementById("submitPane").classList.remove("admin-hide")
    this.setState({
      selected_testimonial: testimonial
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.selected_property !== {}) {
      this.props.deleteTestimonial(this.state.selected_testimonial.id)
    }
    this.setState({
      agent_id: 0,
      selected_testimonial: {},
      testimonials: []
    });
    document.getElementById("submitPane").classList.add("admin-hide")
    document.getElementById("adminTestimonialDisplay").classList.add("admin-hide")
  }

  render() {

    return(
      <div>
        <h3>Delete Testimonial</h3>
        <select id="agentSelect" onChange={event => this.handleSelection(event)}>
          <option value="">Choose:</option>
          {this.props.agents.map(agent => <option key={agent.id} value={agent.id}>{agent.first_name + " " + agent.last_name}</option>)}
        </select>
        <div id="submitPane" className="admin-hide">
          <h4>Selected Testimonial: {this.state.selected_testimonial.comment}</h4>
          <form onSubmit={event => this.handleSubmit(event)}>
            <input type="submit" value="Confirm Delete" />
          </form>
          <br /><br />
        </div>
        <div id="adminTestimonialDisplay" className="admin-hide">
          {this.state.testimonials.map(testimonial => <p>{testimonial.comment}<br /><button onClick={event => this.confirmSubmitPane(event, testimonial)}>delete</button></p>)}
        </div>

      </div>
    )

  }

}

const mapDispatchToProps = dispatch => {
  return {
    deleteTestimonial: testimonial_id => dispatch(deleteTestimonial(testimonial_id))
  };
};

export default connect(null, mapDispatchToProps)(TestimonialDelete);
