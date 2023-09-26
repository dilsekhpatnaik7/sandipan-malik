import React, {useState, useEffect} from 'react';
import './App.css';
import MainComponent from './components/MainComponent';
import Loader from './components/Loader';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  },[])

  return (
    <BrowserRouter>
      <div className='h-auto'>
        {
          loading ?
          <Loader/>
          :
          <MainComponent/>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
