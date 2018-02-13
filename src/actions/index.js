import axios from 'axios';

export const FETCH_FEEDS = "FETCH_FEEDS";
export const CREATE_COMMENT = "CREATE_COMMENT";

const ROOT_URL = "https://api.wizbii.com/v2/dashboard/?direction=newest";
const LOGIN_URL = "https://api.wizbii.com/v1/account/validate";
const cheatingToken = "8edjjh0jsggscgoscokk8ok0gc40ss0";

const authOptions = {
  method: 'POST',
  url: ROOT_URL,
  data: {},
  headers: {
    'Authorization': `Bearer ${cheatingToken}`
  },
  json: true
};

export function fetchFeeds() {
  const request = axios(authOptions);
  return {type: FETCH_FEEDS, payload: request}
}

export function createComment(values, callback) {
  //TODO
  return {type: CREATE_COMMENT, payload: values};
}
