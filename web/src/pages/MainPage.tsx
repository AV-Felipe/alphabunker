/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes } from 'react-router-dom';
import SummaryPage from './SummaryPage';
import HeaderPage from './HeaderPage';
import PageBody from '../components/PageBody';
import { useUser } from '../providers/UserProvider';
import TransferPage from '../pages/TransferPage';
import DepositPage from '../pages/DepositPage';
import WithdrawPage from '../pages/WithdrawPage';

export default function MainPage () {
  const {user} = useUser();

  return (
    <PageBody>
      <HeaderPage/>
      <Routes>
        <Route path='summary' element={<SummaryPage />} />
        <Route path='transfer' element={<TransferPage />} />
        <Route path='deposit' element={<DepositPage />} />
        <Route path='withdraw' element={<WithdrawPage />} />
      </Routes>
    </PageBody>
  );
}
