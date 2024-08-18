import {useState} from 'react';
import {createContext} from 'react';

const AppContext = createContext(null);

const AppStore = ({children}) => {
  const [workTime, setWorkTime] = useState({from: '8:00', to: '18:00'});
  const [numberPhone, setNumberPhone] = useState(['+7 904 453-95-58', '+7 958 166-31-76']);
  const [email, setEmail] = useState('socrat-89@yandex.ru');
  const [address, setAddress] = useState({
    index: '629000',
    city: 'Салехард',
    street: 'Свердлова, дом 22, офис 214'
  });
  
  return (
    <AppContext.Provider 
      value={{
        workTime, setWorkTime,
        numberPhone, setNumberPhone,
        email, setEmail,
        address, setAddress
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
