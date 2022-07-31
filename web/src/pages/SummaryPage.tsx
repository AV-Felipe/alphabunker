/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes, useNavigate } from 'react-router-dom';
import MainContainer from '../components/MainContainer';
import MainTitle from '../components/MainTitle';
import SummaryBody from '../components/summaryBody';
import SummaryRow from '../components/SummaryRow';
import Button from '../components/Button';
import Header from '../components/Header';
import HeaderRow from '../components/HeaderRow';
import HeaderSummary from '../components/HeaderSummary';
import HeaderWelcome from '../components/HeaderWelcome';
import summaryIcon from '../assets/vectors/icon-summary-orange.svg';
import transferIcon from '../assets/vectors/icon-transfer.svg';
import depositIcon from '../assets/vectors/icon-deposit.svg';
import withdrawIcon from '../assets/vectors/icon-withdraw.svg';
import userIcon from '../assets/vectors/icon-user.svg';

export default function SummaryPage () {

  const navigate = useNavigate();

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
          <SummaryRow date='08/06/1985' transferSend='100' withdraw='50' fee='6' deposit='200' transferReceived='1000'/>
          <SummaryRow date='09/06/1985' transferSend='10' deposit='250' transferReceived='1500'/>
        </SummaryBody>

      </MainContainer>

    </>
  );
}
