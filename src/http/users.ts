import { $host } from '.';
import { IUser } from '../utils/interfaces';

class UsersReq {
   getUsers = async () => {
      const { data } = await $host.get<IUser[]>('/users/');
      return data;
   };
}

export default new UsersReq();
