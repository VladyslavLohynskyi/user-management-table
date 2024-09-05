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
            <div className='user-list__headers'>
               <p>User Information</p>
               <p>Address</p>
               <p>Company</p>
            </div>
            {isUsersLoading ? (
               <div className='user-list__message'>
                  <p>...Loading</p>
               </div>
            ) : users.length === 0 ? (
               <div className='user-list__message'>
                  <p>No Users Found For These Filters</p>
               </div>
            ) : (
               users.map((user) => <UserItem key={user.id} user={user} />)
            )}
         </div>
      </main>
   );
}

export default Main;
