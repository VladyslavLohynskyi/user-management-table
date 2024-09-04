import { useEffect } from 'react';
import './App.scss';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { getUsers } from './store/reducers/users/usersActionCreators';

function App() {
   const dispatch = useAppDispatch();
   const { users, isUsersLoading } = useAppSelector(
      (state) => state.usersReducer,
   );
   useEffect(() => {
      dispatch(getUsers());
   }, []);
   return (
      <div className='app'>
         {isUsersLoading ? <p>...Loading</p> : <p>{JSON.stringify(users)}</p>}
      </div>
   );
}

export default App;
