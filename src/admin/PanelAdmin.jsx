import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PanelAdmin() {
  const [stories, setStories] = useState([])
  const [videos, setVideos] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("admin-auth") !== "true") {
      navigate("/admin")
    }
  }, [navigate])

  useEffect(() => {
    fetch("https://lazaro-api.onrender.com/api/stories")
      .then(r => r.json())
      .then(data => setStories(data))
  }, [])

  const aprobar = async (id) => {
    await fetch(`https://lazaro-api.onrender.com/api/stories/${id}/approve`, { method: "PATCH" })
    setStories(stories.map(s => s._id === id ? { ...s, approved: true } : s))
  }

  const rechazar = async (id) => {
    await fetch(`https://lazaro-api.onrender.com/api/stories/${id}`, { method: "DELETE" })
    setStories(stories.filter(s => s._id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-lazaro-azul mb-8">Panel Admin</h1>
        
        <h2 className="text-3xl font-bold mb-6">Historias pendientes ({stories.filter(s => !s.approved).length})</h2>
        <div className="space-y-6">
          {stories.filter(s => !s.approved).map(story => (
            <div key={story._id} className="bg-white p-6 rounded-xl shadow">
              <p><strong>Edad:</strong> {story.edad} años</p>
              <p><strong>Historia:</strong> {story.historia}</p>
              <div className="mt-4 space-x-4">
                <button onClick={() => aprobar(story._id)} className="bg-green-600 text-white px-6 py-2 rounded">
                  Aprobar
                </button>
                <button onClick={() => rechazar(story._id)} className="bg-red-600 text-white px-6 py-2 rounded">
                  Rechazar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
