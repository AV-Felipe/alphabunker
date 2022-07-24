/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes, Navigate } from 'react-router-dom';
import HeaderPage from '../pages/HeaderPage';
import LoginPage from '../pages/LoginPage';

export const Router = () => (
  <>
    <HeaderPage />
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={
        <LoginPage />
      }
      />

      <Route path="/home" element={<div></div>} />

      <Route path="*" element={<h1>Error 404</h1>} />
    </Routes>
  </>
);
