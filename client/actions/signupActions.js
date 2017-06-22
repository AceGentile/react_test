import axios from 'axios';

export function userSignupRequest(userdata) {
  return dispatch => {
    return axios.post('/api/users', userdata);
  }
}
