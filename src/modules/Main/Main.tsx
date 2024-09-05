import './Main.scss';
import { useAppSelector } from '../../hooks/redux';
import UserItem from '../ui/UserItem/UserItem';

function Main() {
   const { users, isUsersLoading } = useAppSelector(
      (state) => state.usersReducer,
   );

   return (
      <main className='main max-width'>
         {isUsersLoading ? (
            <p>...Loading</p>
         ) : (
            <div>
               <div className='user-list__headers'>
                  <p>User Information</p>
                  <p>Address</p>
                  <p>Company</p>
               </div>
               {users.map((user) => (
                  <UserItem key={user.id} user={user} />
               ))}
            </div>
         )}
      </main>
   );
}

export default Main;
