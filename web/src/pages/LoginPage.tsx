/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import logoIcon from '../assets/vectors/logo.svg';
import { useUser } from '../providers/userProvider';
import { Link } from 'react-router-dom';

export default function HeaderPage () {
  const { user } = useUser();
  const [values, setValues] = useState({});

  const navigate = useNavigate();

  function handleChange (event) {
    const name = event.target.name;
    const value = event.target.value;
    user.account[name] = value
    if(name === 'name') user.name = value
    setValues(values => ({...values, [name]: value}));

  }

  function handleClick (event) {

    const requestBody = {
      account: user.account
    }

    fetch('http://localhost:8000/extract', {
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
        user.extract = res.data
        navigate('/home')
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='py-4 w-screen h-screen bg-[#F5F5F5] flex flex-col items-center gap-2'>
      <img src={logoIcon} className={'w-32'} />
      <p>Login</p>
      <FormInput name='name' placeHolder='Nome' value={values.name} handleChange={handleChange} />
      <FormInput name='agency_number' placeHolder='Número da agência' value={values.agency_number} handleChange={handleChange} />
      <FormInput name='agency_verification_code' placeHolder='Código de verificação da agência' value={values.agency_verification_code} handleChange={handleChange} />
      <FormInput name='account_number' placeHolder='Número da conta' value={values.account_number} handleChange={handleChange} />
      <FormInput name='account_verification_code' placeHolder='Código de verificação da conta' value={values.account_verification_code} handleChange={handleChange} />
      <FormInput name='password' placeHolder='Senha' value={values.password} handleChange={handleChange} />
      <FormButton handleClick={handleClick}>Entrar</FormButton>
      <Link to={'/register'}>Crie sua conta</Link>
  </div>
  );
}
