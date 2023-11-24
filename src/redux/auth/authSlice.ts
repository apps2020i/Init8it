import {createSlice} from '@reduxjs/toolkit';
import authApi from '../../services/authService';
import {storeData} from '../../helpers/localstorage';
import {ASYNC_STORE_VAR} from '../../constants/constants';

export interface authState {
  user?: any;
  token?: string;
}

const initialState: authState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log('Action will be requiered', action?.payload?.user);
      state.user = action.payload?.user;
    },
    setToken: (state, action) => {
      console.log('Token for apis', action?.payload?.token);
      state.token = 'hellotoken';
    },
  },
  extraReducers: (builder: any) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state: any, action: any) => {
        console.log(' login api calling here', action.payload);
        state.user = action.payload;
        storeData(ASYNC_STORE_VAR.user, state.user);
      },
    );
  },
});

export const {setUser, setToken} = authSlice.actions;

export default authSlice;
