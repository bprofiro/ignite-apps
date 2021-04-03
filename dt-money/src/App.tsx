import Modal from 'react-modal';
import { BrowserRouter as Router } from 'react-router-dom';

import { TransactionsProvider } from './hooks/useTransactions';

import { AuthProvider } from './hooks/useAuth';
import { Routes } from './routes';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

function App() {
  return (
    <Router>
      <AuthProvider>
        <TransactionsProvider>
          <Routes />
        </TransactionsProvider>
      </AuthProvider>

      <GlobalStyle />
    </Router>
  );
}

export default App;
