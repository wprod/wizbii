import { FETCH_FEEDS } from '../actions';
import { CREATE_COMMENT } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_FEEDS:
    console.log(action.payload.data.feed_items);
      return action.payload.data.feed_items;
    case CREATE_COMMENT:
      console.log(Object.keys(action.payload));
      // return _.chain(state).find({value: "action.payload.id"}).merge({comments: "action.payload.blablabla"});
    default:
      return state;
  }
}
