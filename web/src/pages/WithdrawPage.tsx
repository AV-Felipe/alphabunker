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
import FormInput from '../components/FormLongInput';
import FormButton from '../components/FormButton';
import FormLongInput from '../components/FormLongInput';
import { useUser } from '../providers/UserProvider';
import { LoginValues } from '../utils/types';
import FormTitle from '../components/FormTitle';


export default function WithdrawPage () {
  const { user } = useUser();
  const [values, setValues] = useState({} as LoginValues);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<LoginValues>>({});
  const navigate = useNavigate();

  function handleChange (event) {
    const name = event.target.name;
    const value = event.target.value;
    user.account[name] = value;
    if(name === 'name') user.name = value;
    setValues(values => ({...values, [name]: value}));
  }
  function handleClick (event) {
    const [agency_number, agency_verification_code] = user.account.agency_number.split('-');
    const [account, account_verification_code] = user.account.account_number.split('-');

    const requestBody = {

    };
    if(user.account.password == user.account.password) {
      setLoading(true);
      fetch('http://localhost:8000/transfer', {
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
          navigate('/withdraw');
        })
        .catch(err => console.log(err));
    } else {
      console.log('o password não foi validado');
    }

  }

  return (
    <>
      <MainContainer>
        <MainTitle title='Saque' iconSrc={withdrawOrangeIcon} bell={false} />
        <div className='mb-3.5'>
          <FormTitle title={'Dados para saque'} />
          <div className='flex'>
            <FormInput type='text' name='agency' placeHolder={`${user.account.agency}` + '-' +`${user.account.agency_verification_code}`} readOnly={true} value={values.agency_number} formSection={true} />
            <div className='w-8'></div>
            <FormInput type='text' name='account' placeHolder={ `${user.account.account_number}` + '-' +`${user.account.account_verification_code}`} readOnly={true} value={values.account_number} formSection={true} />
          </div>
        </div>
        <FormLongInput type='text' name='value' placeHolder='Valor' value={values.value} handleChange={handleChange} readOnly={false}/>
        <FormLongInput type='text' name='password' placeHolder='Senha' value={values.password} handleChange={handleChange} readOnly={false}/>
        <FormButton loading={loading} handleClick={handleClick}>Transferir</FormButton>
      </MainContainer>
    </>
  );
}