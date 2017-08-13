import React from 'react';
import { connect } from 'react-redux';

import TextFieldGroup from '../TextFieldGroup';
import { createEvent } from '../../actions/eventActions';

class EventForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        title: '',
        errors: {},
        isLoading: false,
      }

      this.onSubmit = this.onSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
    }


    onSubmit(e) {
      e.preventDefault();
      this.props.createEvent(this.state);
    }

    onChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    render() {
      const { title, errors, isLoading } = this.state;

      return (
        <form onSubmit={this.onSubmit}>
          <h1>Create new event</h1>

          { errors.form && <div className="alert alert-danger">{ errors.form }</div> }

          <TextFieldGroup
            field="title"
            label="title"
            value={title}
            onChange={this.onChange}
          />

          <div className="form-group">
            <button className="btn btn-primary btn-lg" disabled={isLoading}>Submit</button>
          </div>
        </form>
      );
    }
}

EventForm.propTypes = {
  createEvent: React.PropTypes.func.isRequired,
}

EventForm.contextTypes = {

}

export default connect(null, { createEvent })(EventForm);
