// hooks/useAuth.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

const VALID_LOGIN = 'Александр';
const VALID_PASSWORD = '123456';

type AuthContextType = {
  isSignedIn: boolean;
  signIn: (login: string, password: string) => boolean;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState(false);

  // возвращает true, если логин и пароль верные
  const signIn = (login: string, password: string) => {
    if (login.trim() === VALID_LOGIN && password === VALID_PASSWORD) {
      setIsSignedIn(true);
      return true;
    }
    return false;
  };

  const signOut = () => setIsSignedIn(false);

  return (
    <AuthContext.Provider value={{ isSignedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth нужно использовать внутри <AuthProvider>');
  return ctx;
}