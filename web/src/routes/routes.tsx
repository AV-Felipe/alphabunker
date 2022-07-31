/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes, Navigate } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import SummaryPage from '../pages/SummaryPage';
import TransferPage from '../pages/TransferPage';
import DepositPage from '../pages/DepositPage';
import WithdrawPage from '../pages/WithdrawPage';

export const Router = () => (
  <>

    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={
        <LoginPage />
      }
      />

      <Route path="/home/*" element={
        <MainPage />
      }
      />
      



      <Route path="/summary/*" element={
        <SummaryPage />
      }
      />

      <Route path="/transfer/*" element={
        <TransferPage />
      }
      />

      <Route path="/deposit/*" element={
        <DepositPage />
      }
      />

      <Route path="/withdraw/*" element={
        <WithdrawPage />
      }
      />


      <Route path="*" element={<h1>Error 404</h1>} />
    </Routes>
  </>
);
