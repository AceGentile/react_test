import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import classnames from 'classnames';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false,
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    this.setState({ isLoading: true });
    e.preventDefault();
    this.props.userSignupRequest(this.state).then(
      () => {
       this.setState({ isLoading: false })
      }, //works
      (  data  ) => (this.setState({ errors: data.response.data, isLoading: false }))
    );
  }

  render () {
    const { errors } = this.state;
    const options = map(timezones, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Join satan</h2>
        <div className={classnames("form-group", {
          'has-error': errors.username
        })}>
          <label className="control-label">Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.onChange}
            name="username"
            className="form-control"
          />
          { errors.username  && <span className="help-block">{ errors.username }</span>}
        </div>

        <div className={classnames("form-group", {
          'has-error': errors.email
        })}>
          <label className="control-label">Email</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.onChange}
            name="email"
            className="form-control"
          />
          { errors.email && <span className="help-block">{ errors.email }</span>}
        </div>
        <div className={classnames("form-group", {
          'has-error': errors.password
        })}>
          <label className="control-label">Password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.onChange}
            name="password"
            className="form-control"
          />
          { errors.password && <span className="help-block">{ errors.password }</span>}
        </div>

        <div className={classnames("form-group", {
          'has-error': errors.passwordConfirmation
        })}>
          <label className="control-label">Password confirmation</label>
          <input
            type="password"
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            name="passwordConfirmation"
            className="form-control"
          />
          { errors.passwordConfirmation && <span className="help-block">{ errors.passwordConfirmation }</span>}
        </div>

        <div className={classnames("form-group", {
          'has-error': errors.timezone
        })}>
          <label className="control-label">Timezone</label>
          <select
            value={this.state.timezone}
            onChange={this.onChange}
            name="timezone"
            className="form-control"
          >
            <option value="" disabled>Choose your timezone</option>
            {options}
          </select>
          { errors.timezone && <span className="help-block">{ errors.timezone }</span>}
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg" disabled={this.state.isLoading}>
            Sign up
          </button>
        </div>
      </form>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
}

export default SignupForm;
