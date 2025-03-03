import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../shared/store/store';
import { CssBaseline } from '@mui/material';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </Provider>
)
