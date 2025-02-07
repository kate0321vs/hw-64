import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ToastContainer autoClose={1000}/>
    <CssBaseline/>
    <App/>
  </BrowserRouter>

)
