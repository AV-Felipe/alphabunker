/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes } from 'react-router-dom';
import SummaryPage from './SummaryPage';
import HeaderPage from './HeaderPage';
import PageBody from '../components/PageBody';


export default function MainPage () {

  return (
    <PageBody>
      <HeaderPage/>
      {/* TODO criar as páginas para cada sub-rota e adicionar aqui */}
      <Routes>
        <Route path='summary' element={<SummaryPage />} />
        <Route path='transfer' element={<p>página de transferência</p>} />
        <Route path='deposit' element={<p>página de depósito</p>} />
        <Route path='withdraw' element={<p>página de saque</p>} />
      </Routes>

    </PageBody>
  );
}
