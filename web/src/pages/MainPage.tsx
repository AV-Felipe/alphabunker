/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes } from 'react-router-dom';
import SummaryPage from './SummaryPage';
import HeaderPage from './HeaderPage';
import PageBody from '../components/PageBody';
import { useUser } from '../providers/userProvider';

export default function MainPage () {
  const {user} = useUser();

  return (
    <PageBody>
      <HeaderPage/>
      <Routes>
        <Route path='summary' element={<SummaryPage />} />
        <Route path='transfer' element={<p>página de transferência</p>} />
        <Route path='deposit' element={<p>página de depósito</p>} />
        <Route path='withdraw' element={<p>página de saque</p>} />
      </Routes>
    </PageBody>
  );
}
