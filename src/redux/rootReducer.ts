import {AnyAction, combineReducers} from 'redux';
// import counterSlice from './counterRedux/counterSlice';
import authApi from '../services/authService';
import {removeData} from '../helpers/localstorage';
import {removeAuthToken} from '../helpers/api';
import {ASYNC_STORE_VAR} from '../constants/constants';
import authSlice from './auth/authSlice';
import appSlice from './app/appSlice';
import appApi from '../services/appServices';

const appReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [appApi.reducerPath]: appApi.reducer,
  auth: authSlice.reducer,
  apps: appSlice.reducer,
});

export default (state: any, action: AnyAction) => {
  state = undefined;
  removeData(ASYNC_STORE_VAR.token);
  removeAuthToken();
  return appReducer(state, action);
};
