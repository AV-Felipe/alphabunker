import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/routes';

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>


  );
};
