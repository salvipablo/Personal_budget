import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [ userName, setUserName ] = useState('');
  const [ loggedUserId, setLoggedUserId] = useState(0);
  const [ updateComponents, setUpdateComponents] = useState(0);

  const PORT_API = 3010;
  const API_URL = `http://192.168.0.237:${PORT_API}`;

  useEffect(() => {
    let userSession = sessionStorage.getItem('userPres');
    setUserName(userSession);
  }, [userName, loggedUserId]);

  return (
    <UserContext.Provider value={
      { API_URL, userName, setUserName,
        loggedUserId, setLoggedUserId,
        updateComponents, setUpdateComponents
      }
    }>
    {props.children}
    </UserContext.Provider>
  );
}
