import React, { useEffect, useState } from 'react';

import './Filters.scss';
import { Input } from '../Input';
import { IFilters } from '../../../utils/interfaces';
import { useAppDispatch } from '../../../hooks/redux';
import { getUsers } from '../../../store/reducers/users/usersActionCreators';

export const Filters: React.FC = () => {
   const dispatch = useAppDispatch();
   const [name, setName] = useState<string>('');
   const [username, setUsername] = useState<string>('');
   const [email, setEmail] = useState<string>('');
   const [phone, setPhone] = useState<string>('');
   const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
   };
   const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
   };
   const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
   };

   const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPhone(e.target.value);
   };
   useEffect(() => {
      let filters: IFilters = {};
      if (name) {
         filters = { ...filters, name };
      }
      if (username) {
         filters = { ...filters, username };
      }
      if (email) {
         filters = { ...filters, email };
      }
      if (phone) {
         filters = { ...filters, phone };
      }
      dispatch(getUsers(filters));
   }, [name, username, email, phone]);
   return (
      <div className='filters'>
         <Input placeholder='Name' value={name} onChange={handleChangeName} />
         <Input
            placeholder='Username'
            value={username}
            onChange={handleChangeUsername}
         />
         <Input
            placeholder='Email'
            type='email'
            value={email}
            onChange={handleChangeEmail}
         />
         <Input
            placeholder='Phone'
            value={phone}
            onChange={handleChangePhone}
         />
      </div>
   );
};
