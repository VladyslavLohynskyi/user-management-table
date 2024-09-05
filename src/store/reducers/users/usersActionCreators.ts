import { AppDispatch } from '../../store';
import { usersSlice } from './usersSlice';
import UsersReq from '../../../http/users';
import { IFilters } from '../../../utils/interfaces';
export const getUsers =
   (filters: IFilters) => async (dispatch: AppDispatch) => {
      dispatch(usersSlice.actions.getUsersStart());
      const users = await UsersReq.getUsers(filters);
      dispatch(usersSlice.actions.getUsersSuccess(users));
   };
