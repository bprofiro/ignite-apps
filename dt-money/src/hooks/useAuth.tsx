import { createContext, ReactNode, useCallback, useContext, useState } from 'react';

import { api } from '../services/api';

interface UserProps {
  id: string,
  email: string,
}

interface AuthState {
  token: string;
  user: UserProps;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  user: UserProps;
  signIn: (email: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@dt-money:token');
    const user = localStorage.getItem('@dt-money:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async (email: string) => {
    const response = await api.post('/sessions', {
      email,
    });

    const { token, user } = response.data;

    localStorage.setItem('@dt-money:token', token);
    localStorage.setItem('@dt-money:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }


  return context;
}