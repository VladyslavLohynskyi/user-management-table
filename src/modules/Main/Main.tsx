import './Main.scss';
import { useAppSelector } from '../../hooks/redux';

function Main() {
   const { users, isUsersLoading } = useAppSelector(
      (state) => state.usersReducer,
   );

   return (
      <main className='main max-width'>
         {isUsersLoading ? <p>...Loading</p> : <p>{JSON.stringify(users)}</p>}
      </main>
   );
}

export default Main;
