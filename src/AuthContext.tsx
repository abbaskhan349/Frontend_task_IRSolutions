import React, { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  updateAuthState: Dispatch<SetStateAction<Partial<AuthContextType>>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthContextType>({
    // isAuthenticated: false,
    isAuthenticated: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : '',
    updateAuthState: () => { },
  });

  const updateAuthState = (newState: SetStateAction<Partial<AuthContextType>>) => {
    setAuthState((prevState) => ({ ...prevState, ...(typeof newState === 'function' ? newState(prevState) : newState) }));
  };

  return (
    <AuthContext.Provider value={{ ...authState, updateAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
