import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    let userSession = sessionStorage.getItem('userPres');
    setUserName(userSession);
  }, [userName]);

  function updateUser(user) {
    setUserName(user);
  } 

  return (
    <UserContext.Provider value={{userName, setUserName, updateUser}}>
    {props.children}
    </UserContext.Provider>
  );
}
