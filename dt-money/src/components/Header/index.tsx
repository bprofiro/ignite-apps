import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/useAuth';

import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />

        
        <div>
          <button type="button" onClick={onOpenNewTransactionModal}>
            Nova transação
          </button>
          <button type="button" onClick={signOut}>
            Sair
          </button>
        </div>


      </Content>
    </Container>
  )
}