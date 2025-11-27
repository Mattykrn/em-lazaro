import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PanelAdmin() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('admin-lazaro-autenticado')) {
      navigate('/admin')
    }
  }, [navigate])

  const logout = () => {
    localStorage.removeItem('admin-lazaro-autenticado')
    navigate('/admin')
  }

  // Mensajes de ejemplo (después los traemos del backend)
  const mensajes = [
    { id: 1, nombre: 'Carla', contacto: 'carla@gmail.com', mensaje: 'Quiero contar mi historia con EM desde los 28 años...', fecha: '26/11/2025' },
    { id: 2, nombre: 'Diego', contacto: '+543414567890', mensaje: 'Gracias por los abrazos del domingo, me cambiaron la vida', fecha: '25/11/2025' }
  ]

  const aprobar = (id, seccion) => {
    alert(`Mensaje ${id} aprobado como ${seccion} y publicado`)
  }

  const rechazar = (id) => {
    if (confirm('¿Rechazar este mensaje?')) {
      alert(`Mensaje ${id} rechazado`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
      <div className="max-w-7xl mx-auto">
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
                    <p className="text-xl"><strong>Contacto:</strong> {m.contacto}</p>
                    <p className="text-xl"><strong>Fecha:</strong> {m.fecha}</p>
                  </div>
                  <p className="text-xl bg-purple-50 p-6 rounded-xl mb-8"><strong>Mensaje:</strong> {m.mensaje}</p>
                  <div className="flex gap-4">
                    <button onClick={() => aprobar(m.id, 'Testimonios')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-xl font-bold">
                      ➤ Publicar como Testimonio
                    </button>
                    <button onClick={() => aprobar(m.id, 'Apoyo')} className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-xl font-bold">
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
