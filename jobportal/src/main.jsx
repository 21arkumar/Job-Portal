import { BrowserRouter, Routes, Route } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<App />}>

      </Route>
    </Routes>
  </BrowserRouter>,
)
