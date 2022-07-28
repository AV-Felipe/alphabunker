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
    const jsonValues = JSON.stringify(values);
    localStorage.setItem('userdata', jsonValues);

    //TODO build request based on user input
    const requestBody ={
      agency: "1234",
      agverifier: "0",
      account: "18",
      acverifier: "1",
      password: "password"
    };


    fetch('http://localhost:8000/transactions/summary', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        navigate('/home');
      })//TODO Check if backend response have Data or Message, treat behavior and use data
      .catch(err => console.log(err));

  }

  return (
    <div className='py-4 w-screen h-screen bg-[#F5F5F5] flex flex-col items-center gap-2'>

      <img src={logoIcon} className={'w-32'} />

      <p>Acesse sua conta</p>

      <FormInput name='name' placeHolder='digite seu nome' value={values.name} handleChange={handleChange} />
      <FormInput name='agency' placeHolder='digite sua agência' value={values.agency} handleChange={handleChange} />
      <FormInput name='account' placeHolder='digite sua conta' value={values.account} handleChange={handleChange} />
      <FormInput name='password' placeHolder='digite sua senha' value={values.password} handleChange={handleChange} />

      <FormButton handleClick={handleClick}>entrar</FormButton>


    </div>
  );
}
