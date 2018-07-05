import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import CustomerReducer from './CustomerReducer';
import BusinessOwnerReducer from './BusinessOwnerReducer';
import RegisterPurchaseReducer from './RegisterPurchaseReducer';
import ConfirmPurchaseReducer from './ConfirmPurchaseReducer';
import PurchaseFinishedReducer from './PurchaseFinishedReducer';

export default combineReducers({
  auth: AuthReducer,
  profile: ProfileReducer,
  customer: CustomerReducer,
  businessOwner: BusinessOwnerReducer,
  registerPurchase: RegisterPurchaseReducer,
  confirmPurchase: ConfirmPurchaseReducer,
  purchaseFinished: PurchaseFinishedReducer
});
