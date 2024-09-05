import { $host } from '.';
import { IFilters, IUser } from '../utils/interfaces';

class UsersReq {
   getUsers = async (filters: IFilters) => {
      const { data } = await $host.get<IUser[]>('/users/', {
         params: { ...filters },
      });
      return data;
   };
}

export default new UsersReq();
