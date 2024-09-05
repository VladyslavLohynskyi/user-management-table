import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../utils/interfaces';

interface IUsersState {
   users: IUser[];
   isUsersLoading: boolean;
}

const initialState: IUsersState = {
   users: [],
   isUsersLoading: true,
};

export const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      getUsersStart(state) {
         state.isUsersLoading = true;
      },
      getUsersSuccess(state, action: PayloadAction<IUser[]>) {
         state.users = action.payload;
         state.isUsersLoading = false;
      },
   },
});

export default usersSlice.reducer;
