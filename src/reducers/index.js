import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import CustomerReducer from './CustomerReducer';
import BusinessOwnerReducer from './BusinessOwnerReducer';

export default combineReducers({
  auth: AuthReducer,
  profile: ProfileReducer,
  customer: CustomerReducer,
  businessOwner: BusinessOwnerReducer
});
