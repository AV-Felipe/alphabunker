/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes, useNavigate } from 'react-router-dom';
import MainContainer from '../components/MainContainer';
import MainTitle from '../components/MainTitle';
import SummaryBody from '../components/summaryBody';
import SummaryRow from '../components/SummaryRow';
import summaryIcon from '../assets/vectors/icon-summary-orange.svg';
import { useEffect, useState } from 'react';
import { useUser } from '../providers/userProvider';
import { parseDate } from '../utils/date';
import DepositRow from '../components/SummaryRow/DepositRow';
import TransferRow from '../components/SummaryRow/TransferRow';
import WithdrawRow from '../components/SummaryRow/WithdrawRow';

export default function SummaryPage () {
  const { user } = useUser();
  const [transactions, setTransactions] = useState();
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
        console.log(res);
        if(res.message != 'Success'){
          return;
        }
        user.account.balance = res.data.account.balance;
        user.extract = res.data;
        console.log(res.data.transactions);
        setTransactions(res.data.transactions);
        console.log(transactions);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <MainContainer>
        <MainTitle title='Extrato de transações' iconSrc={summaryIcon} bell={true} />
        <SummaryBody>
          {
            transactions?.map((transaction)=>{
              if(transaction.type == 'deposit'){
                return  <DepositRow
                  key={Math.random()}
                  date={parseDate(transaction.date)}
                  fee={transaction.tax}
                  value={transaction.value}
                />;
              }else if(transaction.type == 'draft'){
                return  <WithdrawRow
                  key={Math.random()}
                  date={parseDate(transaction.date)}
                  fee={transaction.tax}
                  value={transaction.value}
                />;
              }else{
                return  <TransferRow
                  key={Math.random()}
                  date={parseDate(transaction.date)}
                  fee={transaction.tax}
                  destiny={transaction.destiny}
                  transferSend={transaction.value}
                />;
              }
            })
          }
          {/* <SummaryRow date='09/06/1985' transferSend='10' deposit='250' transferReceived='1500'/> */}
        </SummaryBody>
      </MainContainer>

    </>
  );
}
