/* eslint-disable react/react-in-jsx-scope */
import FormTitle from '../FormTitle';
import FormInput from '../FormInput';
import { useState } from 'react';


interface PropTypes {
    title: string;
    agency?: string;
    account?: string;
    readOnly: boolean;
}

export default function FormSection({
  title,
  agency,
  account,
  readOnly,
}:PropTypes) {

  const [values, setValues] = useState({});
  
  function handleChange (event) {
    const name = event.target.name;
    const value = event.target.value;
    setValues((values: any) => ({...values, [name]: value}));
    console.log(name);
    console.log(value);
    console.log(values);
  }

  return ( 
    <div className='mb-3.5'>
      <FormTitle title={title} />
      <div className='flex'>
        <FormInput name='agency' placeHolder={agency} readOnly={readOnly} value={values.agency} handleChange={handleChange} formSection={true} />
        <div className='w-8'></div>
        <FormInput name='account' placeHolder={account} readOnly={readOnly} value={values.account} handleChange={handleChange} formSection={true}/>
      </div>
    </div>

  );
}
    