import logo from './logo.svg';
import Header from "./components/Header";
import Body from './components/Body';
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/aboutUs" element={<About/>}/>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
