import './App.css';
import './components/styles/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, SingleCountry, Error } from './components/pages';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/countries/:capital' element={<SingleCountry />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
