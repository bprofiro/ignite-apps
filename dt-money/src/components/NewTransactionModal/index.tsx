import { useState, FormEvent } from 'react';

import Modal from 'react-modal';

import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import { Container, TransactionTypeContainer, TypeButton } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewTransactionModal = ({ isOpen, onClose }: NewTransactionModalProps) => {
  const { setTransactions } = useTransactions()


  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      amount,
      category,
      type,
    }

    await setTransactions(data);

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onClose();
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

    <button type="button" onClick={onClose} className="react-modal-close">
      <img src={closeImg} alt="Fechar modal"/>
    </button>

    <Container onSubmit={handleCreateNewTransaction}>
      <h2>Cadastrar transação</h2>

      <input placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)}/>

      <input placeholder="Valor" type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))}/>

      <TransactionTypeContainer>
        <TypeButton type="button" onClick={() => setType('deposit')} isActive={type ==='deposit'} activeColor="green">
          <img src={incomeImg} alt="Entrada" />
          <span>Entrada</span>
        </TypeButton>

        <TypeButton type="button" onClick={() => setType('withdraw')} isActive={type ==='withdraw'} activeColor="red"> 
          <img src={outcomeImg} alt="Saída" />
          <span>Saída</span>
        </TypeButton>
      </TransactionTypeContainer>

      <input placeholder="Categoria" value={category} onChange={(e) => setCategory(e.target.value)}/>

      <button type="submit">Cadastre</button>
    </Container>
  </Modal>
  );
}