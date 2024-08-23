import {Routes, Route} from 'react-router-dom';
import {MainPage} from '../pages';
import './App.css';

function App() {

  return (
    <div  className='rootWrapper'>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
