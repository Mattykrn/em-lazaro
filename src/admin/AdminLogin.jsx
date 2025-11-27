import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
  const [pass, setPass] = useState('')
  const navigate = useNavigate()

  const login = (e) => {
    e.preventDefault()
    if (pass === 'lazaro2025') {
      localStorage.setItem('admin-lazaro-autenticado', 'true')
      navigate('/admin-panel')
    } else {
      alert('Contraseña incorrecta')
    }
  }

  return (
    <div className="min-h-screen bg-purple-900 flex items-center justify-center">
      <div className="bg-white p-12 rounded-2xl shadow-2xl max-w-md w-full">
        <h1 className="text-4xl font-bold text-purple-800 text-center mb-8">Panel Administrador</h1>
        <form onSubmit={login} className="space-y-6">
          <input
            type="password"
            placeholder="Contraseña (solo vos la sabés)"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full px-6 py-4 border-2 border-purple-300 rounded-xl focus:border-purple-700 outline-none text-lg"
            autoFocus
          />
          <button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold text-xl py-4 rounded-xl">
            Entrar
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">Grupo Lázaro - Solo Mati ♥</p>
      </div>
    </div>
  )
}
