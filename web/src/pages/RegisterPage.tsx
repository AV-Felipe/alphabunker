/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import logoIcon from '../assets/vectors/logo.svg';
import { useUser } from '../providers/userProvider';
import { Link } from 'react-router-dom';

export default function RegisterPage () {
  const { user } = useUser();
  const [values, setValues] = useState({});

  const navigate = useNavigate();

  function handleChange (event) {
    const name = event.target.name;
    const value = event.target.value;
    user[name] = value
    setValues(values => ({...values, [name]: value}));
  }

  function handleClick (event) {

    const requestBody = user


    fetch('http://localhost:8000/accounts', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if(res.message != 'Success') return
        navigate('/home');
      })//TODO Check if backend response have Data or Message, treat behavior and use data
      .catch(err => console.log(err));
  }

  return (
    <div className='py-4 w-screen h-screen bg-[#F5F5F5] flex flex-col items-center gap-2'>
      <img src={logoIcon} className={'w-32'} />
      <p>Cadastre-se</p>
      <FormInput name='name' placeHolder='Nome' value={values.name} handleChange={handleChange} />
      <FormInput name='email' placeHolder='Email' value={values.email} handleChange={handleChange} />
      <FormInput name='cpf' placeHolder='Cpf' value={values.cpf} handleChange={handleChange} />
      <FormInput name='birthdate' placeHolder='Data de nascimento' value={values.birthdate} handleChange={handleChange} />
      <FormInput name='password' placeHolder='Senha' value={values.password} handleChange={handleChange} />
      <FormButton handleClick={handleClick}>entrar</FormButton>
      <Link to={'/login'}>Login</Link>
    </div>
  );
}
