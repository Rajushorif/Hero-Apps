import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AppCard({app}){
  const navigate = useNavigate()
  return (
    <div className="app-card" onClick={()=> navigate(`/apps/${app.id}`)}>
      <img src={app.image} alt={app.title} className="app-image" />
      <div className="app-info">
        <h4 className="app-title">{app.title}</h4>
        <div className="app-meta">{app.companyName} • {app.downloads.toLocaleString()} downloads</div>
        <div className="app-rating">⭐ {app.ratingAvg} ({app.reviews})</div>
      </div>
    </div>
  )
}
