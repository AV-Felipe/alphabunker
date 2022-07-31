/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes, useNavigate } from 'react-router-dom';
import MainContainer from '../components/MainContainer';
import MainTitle from '../components/MainTitle';
import { useState } from 'react';
import transferIcon from '../assets/vectors/icon-transfer.svg';
import FormInput from '../components/FormLongInput';
import FormButton from '../components/FormButton';
import FormLongInput from '../components/FormLongInput';
import FormTitle from '../components/FormTitle';
import { useUser } from '../providers/UserProvider';
import { Link } from 'react-router-dom';
import HeaderPage from './LoginPage';

export default function SummaryPage () {
  const { user } = useUser();
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange (event) {
    const name = event.target.name;
    const value = event.target.value;
    user.destiny_account[name] = value;
    if(name === 'name') user.name = value;
    setValues(values => ({...values, [name]: value}));
  }
  function handleClick (event) {
    const [agency_number, agency_verification_code] = user.destiny_account.agency_number.split('-');
    const [account, account_verification_code] = user.destiny_account.account_number.split('-');

    const requestBody = {
      destiny_account: {
        agency_number,
        agency_verification_code,
        account,
        account_verification_code
      },
      origin_account: user.account,
      value: user.destiny_account.value,
    };
    if(user.destiny_account.password == user.account.password) {
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
          navigate('/transfer');
        })
        .catch(err => console.log(err));
    } else {
      console.log('o password não foi validado');
    }

  }

  return (
    <>
      <HeaderPage />
      <MainContainer>
        <MainTitle title='Transferência' iconSrc={transferIcon} bell={false} />
        <div className='mb-3.5'>
          <FormTitle title={'Origem'} />
          <div className='flex'>
            <FormInput type='text' name='agency' placeHolder={`${user.account.agency}` + '-' +`${user.account.agency_verification_code}`} readOnly={true} value={values.agency_number} formSection={true} />
            <div className='w-8'></div>
            <FormInput type='text' name='account' placeHolder={ `${user.account.account_number}` + '-' +`${user.account.account_verification_code}`} readOnly={true} value={values.account_number} formSection={true}/>
          </div>
        </div>
        <div className='mb-3.5'>
          <FormTitle title={'Destino'} />
          <div className='flex'>
            <FormInput type='text' name='agency' readOnly={true} value={values.agency_number} handleChange={handleChange} formSection={true} />
            <div className='w-8'></div>
            <FormInput type='text' name='account' readOnly={true} value={values.account_number} handleChange={handleChange} formSection={true}/>
          </div>
        </div>
        <FormLongInput type='text' name='value' placeHolder='Valor' value={values.value} handleChange={handleChange} readOnly={false} />
        <FormLongInput type='text' name='password' placeHolder='Senha' value={values.password} handleChange={handleChange} readOnly={false} />
        <FormButton loading={loading} handleClick={handleClick} >Transferir</FormButton>
      </MainContainer>
    </>
  );
}