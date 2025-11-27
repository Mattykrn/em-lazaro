import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PanelAdmin() {
  const [mensajes, setMensajes] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('admin-lazaro-autenticado')) {
      navigate('/admin')
    }

    // Traemos mensajes reales del backend
    fetch('https://lazaro-contactos.onrender.com/api/mensajes')  // ← tu URL de Render
      .then(r => r.json())
      .then(data => setMensajes(data))
      .catch(() => setMensajes([]))
  }, [navigate])

  const aprobar = async (id, seccion) => {
    await fetch(`https://lazaro-contactos.onrender.com/api/mensaje/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ seccion })
    })
    setMensajes(mensajes.map(m => m.id === id ? { ...m, aprobado: true } : m))
  }

  const rechazar = async (id) => {
    if (confirm('¿Rechazar este mensaje?')) {
      await fetch(`https://lazaro-contactos.onrender.com/api/mensaje/${id}`, { method: 'DELETE' })
      setMensajes(mensajes.filter(m => m.id !== id))
    }
  }

  const logout = () => {
    localStorage.removeItem('admin-lazaro-autenticado')
    navigate('/admin')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-6xl font-bold text-purple-800">Panel Admin - Grupo Lázaro</h1>
          <button onClick={logout} className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-xl font-bold">
            Cerrar sesión
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <h2 className="text-4xl font-bold text-purple-700 mb-10">
            Mensajes pendientes ({mensajes.length})
          </h2>

          {mensajes.length === 0 ? (
            <p className="text-2xl text-gray-600 text-center py-20">No hay mensajes pendientes por ahora ♥</p>
          ) : (
            <div className="space-y-8">
              {mensajes.map(m => (
                <div key={m.id} className="border-4 border-purple-200 rounded-2xl p-8 hover:shadow-2xl transition">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <p className="text-xl"><strong>Nombre:</strong> {m.nombre}</p>
                    <p className="text-xl"><strong>Contacto:</strong> {m.email}</p>
                    <p className="text-xl"><strong>Fecha:</strong> {m.fecha}</p>
                  </div>
                  <p className="text-xl bg-purple-50 p-6 rounded-xl mb-8"><strong>Mensaje:</strong> {m.mensaje}</p>
                  <div className="flex gap-4">
                    <button onClick={() => aprobar(m.id, 'testimonios')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-xl font-bold">
                      ➤ Publicar como Testimonio
                    </button>
                    <button onClick={() => aprobar(m.id, 'apoyo')} className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-xl font-bold">
                      ➤ Publicar como Apoyo
                    </button>
                    <button onClick={() => rechazar(m.id)} className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-xl font-bold">
                      ✕ Rechazar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
