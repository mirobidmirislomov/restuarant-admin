import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

import AddRes from './Components/AddRes/AddRes'
import AddProduct from './Components/AddProduct/AddProduct'
import DelRes from './Components/DelRes/DelRes' 
import DelProduct from './Components/DelProduct/DelProduct'

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/addRes' element={<AddRes/>}/>
        <Route path='/addProduct' element={<AddProduct/>}/>
        <Route path='/delRes' element={<DelRes/>}/>
        <Route path='/delProduct' element={<DelProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
