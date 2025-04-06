import 'normalize.css';
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Catalog } from './pages/Catalog'
import { Basket } from './pages/Basket'
import { Payment } from './pages/Payment'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Catalog/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
