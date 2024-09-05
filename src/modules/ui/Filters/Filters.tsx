import React from 'react';

import './Filters.scss';
import { Input } from '../Input';

export const Filters: React.FC = () => {
   return (
      <div className='filters'>
         <Input placeholder='Name' />
         <Input placeholder='Username' />
         <Input placeholder='Email' />
         <Input placeholder='Phone' />
      </div>
   );
};
