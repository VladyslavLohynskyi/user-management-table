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
            users.map((user) => <UserItem key={user.id} user={user} />)
         )}
      </main>
   );
}

export default Main;
