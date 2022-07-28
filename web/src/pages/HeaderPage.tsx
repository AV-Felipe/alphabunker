/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import HeaderRow from '../components/HeaderRow';
import HeaderSummary from '../components/HeaderSummary';
import HeaderWelcome from '../components/HeaderWelcome';
import summaryIcon from '../assets/vectors/icon-summary.svg';
import transferIcon from '../assets/vectors/icon-transfer.svg';
import depositIcon from '../assets/vectors/icon-deposit.svg';
import withdrawIcon from '../assets/vectors/icon-withdraw.svg';
import userIcon from '../assets/vectors/icon-user.svg';

export default function HeaderPage () {

  const navigate = useNavigate();

  function handleClick (event) {
    console.log(event.target.getAttribute('desiredPage'));
    const page = event.target.getAttribute('desiredPage');
    // localStorage.setItem('userdata', JSON.stringify(values));
    const data = localStorage.getItem('userdata') !== null ? localStorage.getItem('userdata') : '{"error": "no userData on local storage"}';
    const userData = JSON.parse(data);
    console.log(userData);
    navigate(page);
  }

  return (
    <>
      <Header>

        <HeaderWelcome userName='Felipe' />

        <HeaderRow>

          <Button type="button" imgSource={summaryIcon} name="summary" onClick={handleClick}>
          Extrato
          </Button>

          <Button type="button" imgSource={transferIcon} name="transfer" onClick={handleClick}>
          Transferir
          </Button>

          <Button type="button" imgSource={depositIcon} name="deposit" onClick={handleClick}>
          Depositar
          </Button>

          <Button type="button" imgSource={withdrawIcon} name="withdraw" onClick={handleClick}>
          Sacar
          </Button>

        </HeaderRow>

        <HeaderSummary agency='123' account='456' balance='1.000,99'/>

      </Header>

    </>
  );
}
