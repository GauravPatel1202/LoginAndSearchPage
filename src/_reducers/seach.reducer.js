import { userConstants } from '../_constants';

export function search(state = {}, action) {
  switch (action.type) {
    case userConstants.SEARCH_REQUEST:
      return { registering: true };
    default:
      return state
  }
}