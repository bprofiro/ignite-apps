import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton() {
  const [isUserLogged, setIsUserLogged] = useState(false);

  return isUserLogged ? (
    <button 
      type="button" 
      className={styles.signInButton} 
      onClick={() => setIsUserLogged(!isUserLogged)}
    >
      <FaGithub color="#04d361" />
      Brenda Profiro
      <FiX color="#737380" className={styles.signOuButton} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton} onClick={() => setIsUserLogged(!isUserLogged)}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  )
}