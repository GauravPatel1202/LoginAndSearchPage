import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import {changePassword} from './changePassword.reducer';
import {search} from './seach.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  changePassword,
  search


});

export default rootReducer;