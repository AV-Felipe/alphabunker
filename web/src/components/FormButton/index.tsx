/* eslint-disable react/react-in-jsx-scope */
import React, { MouseEventHandler } from 'react';

interface PropTypes {
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  children: string;
}

export default function FormInput({
  handleClick,
  children
}:PropTypes) {

  return (

    <button
      onClick={handleClick}
      className={
        'p-2 border-0 rounded-md bg-btn-primary-base flex justify-center'
      }
    >
      {children}
    </button>

  );
}
