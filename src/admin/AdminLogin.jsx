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
    <div className="min-h-screen bg-purple-900 flex items-center justify-center px-4">
      <div className="bg-white p-12 rounded-3xl shadow-2xl max-w-md w-full text-center">
        <h1 className="text-5xl font-bold text-purple-800 mb-10">Panel Admin</h1>
        <form onSubmit={login} className="space-y-8">
          <input
            type="password"
            placeholder="Contraseña secreta"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full px-6 py-5 border-4 border-purple-300 rounded-xl focus:border-purple-700 outline-none text-xl"
            autoFocus
          />
          <button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold text-2xl py-6 rounded-xl transition">
            Entrar
          </button>
        </form>
        <p className="text-gray-600 mt-8 text-lg">Grupo Lázaro - Solo Mati ♥</p>
      </div>
    </div>
  )
}
