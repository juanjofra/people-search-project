import React, {createContext, useState} from 'react';

export const ClienteContext = createContext();

const ClienteProvider = (props) => {
  const [success, setSuccess] = useState(false);
  const [search, setSearch ] = useState({});

  return (
    <ClienteContext.Provider value={{
      success,
      setSuccess,
      search,
      setSearch
    }}>
      {props.children}
    </ClienteContext.Provider>
  );
}

export default ClienteProvider;