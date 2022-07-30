/* eslint-disable react/react-in-jsx-scope */
import { ChangeEventHandler } from 'react';

interface PropTypes {
  name: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  type: string;
  value?: string;
  placeHolder: string;
  error: string | undefined
}

export default function FormInput({
  name,
  handleChange,
  value,
  error,
  type,
  placeHolder
}:PropTypes) {
  return (
    <>
      <input
        placeholder={placeHolder}
        type={type}
        name={name}
        value={value || ''}
        onChange={handleChange}
        className={
          'font-normal mb-3 px-2.5 gap-1.5 text-input-text w-[250px] h-[33px] border-2 rounded-[5px] border-input-border text-input-placeholder text-base'
        }/>
      {error && <label className='text-input-error mt-[-20px] w-[250px] ml-[10px] text-[10px]'>{error}</label>}
    </>
  );
}
