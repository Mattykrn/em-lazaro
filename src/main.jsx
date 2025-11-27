import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contacto from './pages/Contacto.jsx'
import AdminLogin from './admin/AdminLogin.jsx'
import PanelAdmin from './admin/PanelAdmin.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin-panel" element={<PanelAdmin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
