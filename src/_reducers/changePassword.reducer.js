import { userConstants } from '../_constants';

export function changePassword(state = {}, action) {
  switch (action.type) {
    case userConstants.CHANGE_REQUEST:
      return { registering: true };
    case userConstants.CHANGE_SUCCESS:
      return {};
    case userConstants.CHANGE_FAILURE:
      return {};
    default:
      return state
  }
}