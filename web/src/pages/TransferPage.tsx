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
import transferOrangeIcon from '../assets/vectors/icon-transfer-orange.svg';
import transferIcon from '../assets/vectors/icon-transfer.svg';
import depositIcon from '../assets/vectors/icon-deposit.svg';
import withdrawIcon from '../assets/vectors/icon-withdraw.svg';
import userIcon from '../assets/vectors/icon-user.svg';
import FormSection from '../components/FormSection';
import FormInput from '../components/FormLongInput';
import FormButton from '../components/FormButton';
import FormLongInput from '../components/FormLongInput';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../providers/userProvider';
import { Link } from 'react-router-dom';


export default function SummaryPage () {
  const { user } = useUser();
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChangeOrigin (event) {
    const name = event.target.name;
    const value = event.target.value;
    user.origin_account[name] = value;
    if(name === 'name') user.name = value;
    setValues(values => ({...values, [name]: value}));
  }

  function handleChangeDestiny (event) {
    const name = event.target.name;
    const value = event.target.value;
    user.destiny_account[name] = value;
    if(name === 'name') user.name = value;
    setValues(values => ({...values, [name]: value}));
  }

  function handleChangeValue (event) {
    const name = event.target.name;
    const value = event.target.value;
    user.destiny_account[name] = value;
    if(name === 'name') user.name = value;
    setValues(values => ({...values, [name]: value}));
  }

  function handleClick (event) {

    const requestBody = {
      destiny_account: ,
      origin_account: user.account,
      value: values.value,
    };
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
  }

  return (
    <>
      <MainContainer>
        <MainTitle title='Transferência' iconSrc={transferIcon} bell={false} />
        <div className='mb-3.5'>
          <FormTitle title={'Origem'} />
          <div className='flex'>
            <FormInput type='text' name='agency' placeHolder={`${user.account.agency}` + '-' +`${user.account.agency_verification_code}`} readOnly={true} value={values.agency_number} handleChange={handleChange} formSection={true} />
            <div className='w-8'></div>
            <FormInput type='text' name='account' placeHolder={ `${user.account.account_number}` + '-' +`${user.account.account_verification_code}`} readOnly={true} value={values.account_number} handleChange={handleChange} formSection={true}/>
          </div>
        </div>
        <div className='mb-3.5'>
          <FormTitle title={'Destino'} />
          <div className='flex'>
            <FormInput type='text' name='agency' readOnly={true} value={values.agency_number} handleChange={handleChangeDestiny} formSection={true} />
            <div className='w-8'></div>
            <FormInput type='text' name='account' pl readOnly={true} value={values.account_number} handleChange={handleChangeDestiny} formSection={true}/>
          </div>
        </div>
        <FormLongInput type='text' name='value' placeHolder='Valor' value={values.value} handleChange={handleChangeValue} readOnly={false} />
        <FormLongInput type='text' name='password' placeHolder='Senha' value={values.password} handleChange={handleChangeOrigin} readOnly={false} />
        <FormButton>Transferir</FormButton>
      </MainContainer>
    </>
  );
}
