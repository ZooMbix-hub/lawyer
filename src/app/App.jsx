import {Routes, Route} from 'react-router-dom';
import {AdminPage, MainPage} from '../pages';
import './App.css';

function App() {

  return (
    <div  className='rootWrapper'>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
