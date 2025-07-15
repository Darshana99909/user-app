import logo from './logo.svg';
import './App.css';
import Addapp from './components/Addapp';
import Searchapp from './components/Searchapp';
import Deleteapp from './components/Deleteapp';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Addapp" element={<Addapp/>}/>
      <Route path="/Searchapp" element={<Searchapp/>}/>
      <Route path="/Deleteapp" element={<Deleteapp/>}/>
      <Route path="/Viewall" element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
