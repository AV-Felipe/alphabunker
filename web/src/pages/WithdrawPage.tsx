/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes, useNavigate } from 'react-router-dom';
import MainContainer from '../components/MainContainer';
import MainTitle from '../components/MainTitle';
import { useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import HeaderRow from '../components/HeaderRow';
import HeaderSummary from '../components/HeaderSummary';
import HeaderWelcome from '../components/HeaderWelcome';
import depositOrangeIcon from '../assets/vectors/icon-deposit-orange.svg';
import depositIcon from '../assets/vectors/icon-deposit-.svg';
import withdrawIcon from '../assets/vectors/icon-withdraw.svg';
import withdrawOrangeIcon from '../assets/vectors/icon-withdraw-orange.svg';
import userIcon from '../assets/vectors/icon-user.svg';
import FormSection from '../components/FormSection';
import FormInput from '../components/FormLongInput';
import FormButton from '../components/FormButton';
import FormLongInput from '../components/FormLongInput';

export default function WithdrawPage () {

  const [values, setValues] = useState({});

  const navigate = useNavigate();

  function handleChange (event) {
    const name = event.target.name;
    const value = event.target.value;
    setValues((values: any) => ({...values, [name]: value}));
    console.log(name);
    console.log(value);
    console.log(values);
  }

  return (
    <>
      <MainContainer>
        <MainTitle title='Saque' iconSrc={withdrawOrangeIcon} bell={false} />
        <FormSection title='Dados para saque' agency='1510-5' account='95785-3' readOnly={true} />
        <FormLongInput name='amount' placeHolder='Valor' value={values.amount} handleChange={handleChange}/>
        <FormLongInput name='password' placeHolder='Senha' value={values.password} handleChange={handleChange}/>
        <FormButton>Transferir</FormButton>
      </MainContainer>
    </>
  );
}
