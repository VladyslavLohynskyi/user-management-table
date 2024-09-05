import './UserItem.scss';
import { IUserItemType } from './UserItemType';

const UserItem: React.FC<IUserItemType> = ({ user }) => {
   return (
      <div className='user-item'>
         <p>{JSON.stringify(user)}</p>
      </div>
   );
};

export default UserItem;
