import React, { useState, useEffect, useCallback, createContext, ReactNode } from 'react';

type AuthContextData = {
  isLogged: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextData);

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [isLogged, setIsLogged] = useState(false);

  const signIn = useCallback(
    async (email: string, password: string) => {
      setIsLogged(true);
    },
    [isLogged]
  );

  const signOut = useCallback(async () => {
    setIsLogged(false);
  }, [isLogged]);

  return (
    <AuthContext.Provider value={{ isLogged, signIn, signOut }}>{children}</AuthContext.Provider>
  );
}
