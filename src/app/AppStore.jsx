import {useState} from 'react';
import {createContext} from 'react';

const AppContext = createContext(null);

const AppStore = ({children}) => {
  
  return (
    <AppContext.Provider 
      value={{
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export {
  AppStore,
  AppContext
};