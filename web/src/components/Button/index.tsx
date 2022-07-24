/* eslint-disable react/react-in-jsx-scope */
import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

interface PropTypes {
  children: string;
  source: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  link: string;
  type: 'submit' | 'button' | 'reset' | undefined;
}

export default function Button ({
  onClick,
  children,
  source,
  link,
  type
}: PropTypes) {
  return (
    <div
      className={
        'w-15 flex flex-col items-center'
      }
    >
      <Link to={link}>
        <button
          onClick={onClick}
          type={type}
          className={
            'w-14 h-11 bg-btn-primary-base rounded-md border-0 flex justify-center'
          }
        >
          <img src={source}/>
        </button>
      </Link>

      <Link to={link}>
        <p
          className={
            'text-center'
          }
        >
          {children}
        </p>
      </Link>
    </div>
  );
}
