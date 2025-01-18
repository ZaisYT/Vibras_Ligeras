import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './css/App.css';
import { Home } from './components/Home';

function App() {
  return (
    <div className='React-App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
