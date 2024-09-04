import { AppDispatch } from '../../store';
import { usersSlice } from './usersSlice';
import UsersReq from '../../../http/users';
export const getUsers = () => async (dispatch: AppDispatch) => {
   dispatch(usersSlice.actions.getUsersStart());
   const users = await UsersReq.getUsers();
   dispatch(usersSlice.actions.getUsersSuccess(users));
};
