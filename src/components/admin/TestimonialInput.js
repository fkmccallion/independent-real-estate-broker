import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTestimonial } from '../../actions/testimonials';

class TestimonialInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      source: "",
      client: "",
      agent_id: 0,
      property_id: 0
    }
  }

  addNewProperty = (event, agentId) => {
    event.preventDefault();
    document.getElementById("adminAddPropertyUpdateForm").classList.remove("admin-hide");
    this.setState({
      agent_id: this.props.agentId
    })
  }

  handleTestimonialChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleTestimonialSubmit = event => {
    event.preventDefault();
    this.props.addTestimonial(this.state)
    this.setState({
      comment: "",
      source: "",
      client: "",
      agent_id: 0,
      property_id: 0
    });
    document.getElementById("adminAddTestimonialUpdateForm").classList.add("admin-hide")
  };

  handleSelection = event => {
    if (event.target.value !== "")
    {
      document.getElementById("adminAddTestimonialUpdateForm").classList.remove("admin-hide")
      let selectedAgent = this.props.agents.find(agent => agent.id === parseInt(event.target.value, 10))
      this.setState({
        agent_id: selectedAgent.id
      })
    } else {
      this.setState({
        comment: "",
        source: "",
        client: "",
        agent_id: 0,
        property_id: 0
      });
      document.getElementById("adminAddTestimonialUpdateForm").classList.add("admin-hide")
    }
  }

  render() {
    return(
      <div>
        <h3>Add Testimonial</h3>
        <select id="agentSelect" onChange={event => this.handleSelection(event)}>
          <option value="">Select Agent:</option>
          {this.props.agents.map(agent => <option key={agent.id} value={agent.id}>{agent.first_name + " " + agent.last_name}</option>)}
        </select>
        <div id="adminAddTestimonialUpdateForm" className="admin-hide">
          <form onSubmit={event => this.handleTestimonialSubmit(event)}>
            <p>
              <label>
                Comment:
                <input
                  name="comment"
                  type="text"
                  onChange={event => this.handleTestimonialChange(event)}
                  value={this.state.comment}
                />
              </label>
            </p>
            <p>
              <label>
                Source:
                <input
                  name="source"
                  type="text"
                  onChange={event => this.handleTestimonialChange(event)}
                  value={this.state.city}
                />
              </label>
            </p>
            <p>
              <label>
                Client:
                <input
                  name="client"
                  type="text"
                  onChange={event => this.handleTestimonialChange(event)}
                  value={this.state.client}
                />
              </label>
            </p>
            <input type="submit" value="Submit New Testimonial" />
          </form>
        </div>
      </div>

    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addTestimonial: testimonial => dispatch(addTestimonial(testimonial))
  };
};

export default connect(null, mapDispatchToProps)(TestimonialInput);
