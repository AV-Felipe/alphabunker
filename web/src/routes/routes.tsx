/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes, Navigate } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProfilePage from '../pages/ProfilePage';

export const Router = () => (
  <>

    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={
        <LoginPage />
      }
      />
      <Route path="/register" element={
        <RegisterPage />
      }
      />
      <Route path="/home/*" element={
        <MainPage />
      }
      />
      <Route path="/profile/*" element={
        <ProfilePage />
      }
      />

      <Route path="*" element={<h1>Error 404</h1>} />
    </Routes>
  </>
);
