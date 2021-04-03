import { FormEvent, useState } from 'react';

import { useAuth } from '../../hooks/useAuth';
import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

export const SignIn = () => {
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function handleSignIn(event: FormEvent) {
    event.preventDefault();

    if (!email) {
      return setError('Digite um email válido para entrar');
    }

    signIn(email);
  }

  return (
    <Container>
      <img src={logoImg} alt="dt money" />
      <form onSubmit={handleSignIn}>
        <h2>Faça seu login</h2>
        <input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
        {error && <span>{error}</span>}

        <button type="submit">Entrar</button>
      </form>
    </Container>
  )
}