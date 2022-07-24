/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import logoIcon from '../assets/vectors/logo.svg';

export default function HeaderPage () {
  const [values, setValues] = useState({});

  const navigate = useNavigate();

  function handleChange (event) {
    const name = event.target.name;
    const value = event.target.value;
    setValues(values => ({...values, [name]: value}));
    console.log(name);
    console.log(value);
    console.log(values);
  }

  function handleClick (event) {
    console.log(values);
    localStorage.setItem('userdata', JSON.stringify(values));
    navigate('/home');
  }

  return (
    <div className='absolute w-screen h-screen bg-[#F5F5F5] flex flex-col items-center gap-1'>

      <img src={logoIcon} className={'w-32'} />

      <p>Acesse sua cotna</p>

      <FormInput name='name' placeHolder='digite seu nome' value={values.name} handleChange={handleChange} />
      <FormInput name='agency' placeHolder='digite sua agência' value={values.agency} handleChange={handleChange} />
      <FormInput name='account' placeHolder='digite sua conta' value={values.account} handleChange={handleChange} />
      <FormInput name='password' placeHolder='digite sua senha' value={values.password} handleChange={handleChange} />

      <FormButton handleClick={handleClick}>entrar</FormButton>


    </div>
  );
}
