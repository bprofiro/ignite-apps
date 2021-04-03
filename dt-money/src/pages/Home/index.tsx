import { useState } from 'react';

import { Summary } from '../../components/Summary';
import { TransactionsTable } from '../../components/TransactionsTable';
import { Header } from '../../components/Header';
import { NewTransactionModal } from '../../components/NewTransactionModal';

import { Container } from './styles';

export const Home = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  };

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  };

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Container>
        <Summary />
        <TransactionsTable />
      </Container>

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onClose={handleCloseNewTransactionModal}
      />
    </>
  )
}