import { useEffect } from 'react';
import './App.scss';
import { useAppDispatch } from './hooks/redux';
import { getUsers } from './store/reducers/users/usersActionCreators';
import Main from './modules/Main/Main';

function App() {
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(getUsers());
   }, []);
   return (
      <div className='app'>
         <Main />
      </div>
   );
}

export default App;
