import React, {createContext, useState} from 'react';

export const ClienteContext = createContext();

const ClienteProvider = (props) => {
  const [state, setstate] = useState('prueba');

  return (
    <ClienteContext.Provider value={{
      state,
      setstate
    }}>
      {props.children}
    </ClienteContext.Provider>
  );
}

export default ClienteProvider;