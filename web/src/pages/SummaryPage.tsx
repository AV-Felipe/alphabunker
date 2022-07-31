/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes, useNavigate } from 'react-router-dom';
import MainContainer from '../components/MainContainer';
import MainTitle from '../components/MainTitle';
import SummaryBody from '../components/summaryBody';
import SummaryRow from '../components/SummaryRow';
import summaryIcon from '../assets/vectors/icon-summary-orange.svg';
import { useEffect, useState } from 'react';
import { useUser } from '../providers/UserProvider';
import { parseDate } from '../utils/date';
export default function SummaryPage () {
  const { user } = useUser();
  const [transactions, setTransactions] = useState()
  const navigate = useNavigate();


  useEffect(() => {
    fetch('http://localhost:8000/extract', {
      method: 'POST',
      body: JSON.stringify({account: user?.account}),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        if(res.message != 'Success'){
          return;
        }
        user.account.balance = res.data.account.balance;
        user.extract = res.data;
        console.log(res.data.transactions)
        setTransactions(res.data.transactions);
        console.log(transactions)
      })
      .catch(err => console.log(err));
  }, []);

  function handleClick (event) {
    console.log(event.target.alt);
    const page = event.target.alt;
    // localStorage.setItem('userdata', JSON.stringify(values));
    const data = localStorage.getItem('userdata') !== null ? localStorage.getItem('userdata') : '{"error": "no userData on local storage"}';
    const userData = JSON.parse(data);
    console.log(userData);
    navigate(page);
  }

  return (
    <>
      <MainContainer>
        <MainTitle title='Extrato de transações' iconSrc={summaryIcon} bell={true} />
        <SummaryBody>
          {
            transactions?.map((transaction)=>{
              return <SummaryRow
                key={Math.random()}
                date={parseDate(transaction.date)}
                transferSend=''
                withdraw=''
                fee={transaction.tax}
                deposit={transaction.type === 'deposit' ? transaction.value : ''}
                transferReceived=''
              />;
            })
          }
          {/* <SummaryRow date='09/06/1985' transferSend='10' deposit='250' transferReceived='1500'/> */}
        </SummaryBody>
      </MainContainer>

    </>
  );
}
