import 'normalize.css';
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Catalog } from './components/pages/Catalog'
import { Basket } from './components/pages/Basket'
import { Payment } from './components/pages/Payment'
import { Header } from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Catalog/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
