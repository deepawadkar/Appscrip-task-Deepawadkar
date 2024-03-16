import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <ToastContainer autoClose={4000} position='top-right' />
     <Routes>
    <Route path='/' element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
