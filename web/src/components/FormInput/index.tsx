/* eslint-disable react/react-in-jsx-scope */
import { ChangeEventHandler } from 'react';

interface PropTypes {
  name: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  placeHolder: string;
}

export default function FormInput({
  name,
  handleChange,
  value,
  placeHolder
}:PropTypes) {

  return (

    <input
      placeholder={placeHolder}
      type="text"
      name={name}
      value={value || ''}
      onChange={handleChange}
      className={
        'p-2 border-2 rounded-md border-input-border bg-input-base'
      }
    />

  );
}
