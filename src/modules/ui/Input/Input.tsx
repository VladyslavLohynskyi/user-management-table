import React from 'react';

import './Input.scss';
import { InputType } from './InputType';

export const Input: React.FC<InputType> = ({ ...props }) => {
   return <input className='basic-input' {...props} />;
};
