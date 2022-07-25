/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes, Navigate } from 'react-router-dom';
import HeaderPage from '../pages/HeaderPage';
import LoginPage from '../pages/LoginPage';

export const Router = () => (
  <>

    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={
        <LoginPage />
      }
      />

      <Route path="/home/*" element={
        <HeaderPage />
      }
      />

      <Route path="*" element={<h1>Error 404</h1>} />
    </Routes>
  </>
);
