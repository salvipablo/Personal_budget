import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [userName, setUserName] = useState('');
  // eslint-disable-next-line
  const [ loggedUserId, setLoggedUserId] = useState(0);

  useEffect(() => {
    let userSession = sessionStorage.getItem('userPres');
    setUserName(userSession);
  }, [userName, loggedUserId]);

  return (
    <UserContext.Provider value={{userName, setUserName, loggedUserId, setLoggedUserId}}>
    {props.children}
    </UserContext.Provider>
  );
}
