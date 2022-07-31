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
import userIcon from '../assets/vectors/icon-user.svg';
import FormSection from '../components/FormSection';
import FormTitle from '../components/FormTitle';
import FormInput from '../components/FormLongInput';
import FormButton from '../components/FormButton';
import FormLongInput from '../components/FormLongInput';
import { useUser } from '../providers/userProvider';
import { Link } from 'react-router-dom';

export default function DepositPage () {
  const { user } = useUser();
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  function handleChange (event) {
    const name = event.target.name;
    const value = event.target.value;
    user.account[name] = value;
    if(name === 'name') user.name = value;
    setValues(values => ({...values, [name]: value}));
  }


  function handleClick (event) {

    const requestBody = {
      account: user.account
    };
    setLoading(true);
    fetch('http://localhost:8000/deposit', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setLoading(false);
        if(res.message != 'Success') return;
        user.extract = res.data;
        navigate('/home');
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <MainContainer>
        <MainTitle title='Depósito' iconSrc={depositOrangeIcon} bell={false} />
        <div className='mb-3.5'>
          <FormTitle title={'Dados para Depósito'} />
          <div className='flex'>
            <FormInput type='text' name='agency' placeHolder={`${user.account.agency}` + '-' +`${user.account.agency_verification_code}`} readOnly={true} value={values.agency_number} handleChange={handleChange} formSection={true} />
            <div className='w-8'></div>
            <FormInput type='text' name='account' placeHolder={ `${user.account.account_number}` + '-' +`${user.account.account_verification_code}`} readOnly={true} value={values.account_number} handleChange={handleChange} formSection={true}/>
          </div>
        </div>
        <FormLongInput type='text' name='amount' placeHolder='Valor' value={values.amount} handleChange={handleChange} readOnly={false}/>
        <FormLongInput type='text' name='password' placeHolder='Senha' value={values.password} handleChange={handleChange} readOnly={false}/>
        <FormButton loading={loading} handleClick={handleClick}>Transferir</FormButton>
      </MainContainer>
    </>
  );
}
