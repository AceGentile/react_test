import axios from 'axios';

export function userSignupRequest(userdata) {
  return dispatch => {
    return axios.post('/api/users', userdata);
  }
}

export function isUserExists(identifier) {
    return dispatch => {
      return axios.get(`/api/users/${identifier}`);
    }
}
