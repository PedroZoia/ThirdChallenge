import React, { useState, createContext, ReactNode } from 'react';

interface User {
  email: string;
  password?: string;
  birthDate?: string;
  profession?: string;
  country?: string;
  city?: string;
  relationship?: string;
  name?: string;
}
// Defining types for the context
interface UserContextType {
  userIsLogged: boolean;
  setUserIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  modalIsVisible: boolean;
  setModalIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo: User | null;
  setUserInfo: React.Dispatch<React.SetStateAction<User | null>>;
}

// Initializing the context with an initial value of null
export const UserContext = createContext<UserContextType | null>(null);

// Defining the type for UserProvider props
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = (props: UserProviderProps) => {
  // State to hold the user login status and modal visibility status
  const [userIsLogged, setUserIsLogged] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [userInfo, setUserInfo] = useState<User | null>(null);

  
  return (
    // Providing the state and setter to the context value
    <UserContext.Provider value={{ userIsLogged, setUserIsLogged, modalIsVisible, setModalIsVisible, userInfo, setUserInfo }}>
    {props.children}
</UserContext.Provider>
  );
};