"use client"
import { useEffect, useState } from "react"

type Incident = {
  id: string
  type: string
  thumbnailUrl: string
  tsStart: string
  tsEnd: string
  camera: {
    location: string
  }
}

export default function IncidentList() {
  const [incidents, setIncidents] = useState<Incident[]>([])

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const res = await fetch("/api/incidents?resolved=false")
        if (!res.ok) throw new Error("Failed to fetch incidents")
        const data = await res.json()
        setIncidents(data)
      } catch (err) {
        console.error("Fetch error:", err)
      }
    }

    fetchIncidents()
  }, [])

  const resolveIncident = async (id: string) => {
    setIncidents(prev => prev.filter(incident => incident.id !== id))
    // Here you can optionally call the backend
    // await fetch(`/api/incidents/${id}/resolve`, { method: "PATCH" })
  }

  return (
    <div className="w-1/3 p-4 space-y-2">
      {incidents.map((inc) => (
        <div key={inc.id} className="border p-2 rounded bg-white shadow">
          <img src={inc.thumbnailUrl} className="w-full mb-2" alt="Incident Thumbnail" />
          <p className="font-bold text-red-600">{inc.type}</p>
          <p>{inc.camera.location}</p>
          <p>{new Date(inc.tsStart).toLocaleTimeString()} – {new Date(inc.tsEnd).toLocaleTimeString()}</p>
          <button
            onClick={() => resolveIncident(inc.id)}
            className="bg-green-600 text-white px-2 py-1 mt-2 rounded"
          >
            Resolve
          </button>
        </div>
      ))}
    </div>
  )
}
