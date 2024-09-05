import './Main.scss';
import { useAppSelector } from '../../hooks/redux';
import UserItem from '../ui/UserItem/UserItem';
import { Filters } from '../ui/Filters';

function Main() {
   const { users, isUsersLoading } = useAppSelector(
      (state) => state.usersReducer,
   );

   return (
      <main className='main max-width'>
         <Filters />
         <div className='user-list'>
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
         </div>
      </main>
   );
}

export default Main;
