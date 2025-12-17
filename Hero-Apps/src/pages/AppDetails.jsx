import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import appsData from '../data/apps.json'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function AppDetails(){
  const { id } = useParams()
  const navigate = useNavigate()
  const app = appsData.find(a=> String(a.id)===String(id))
  const [installed, setInstalled] = useState(false)
  const [toast, setToast] = useState('')

  useEffect(()=>{
    const installedList = JSON.parse(localStorage.getItem('installedApps')||'[]')
    setInstalled(installedList.includes(app?.id))
  },[app])

  if(!app) return (<div className="not-found">App not found. <button onClick={()=> navigate(-1)}>Go Back</button></div>)

  function handleInstall(){
    const list = JSON.parse(localStorage.getItem('installedApps')||'[]')
    if(!list.includes(app.id)){
      list.push(app.id)
      localStorage.setItem('installedApps', JSON.stringify(list))
      setInstalled(true)
      setToast('App installed successfully')
      setTimeout(()=> setToast(''), 2500)
    }
  }

  const chartData = app.ratings.map(r=> ({ name: r.name, count: r.count }))

  return (
    <main className="app-details">
      <div className="details-top">
        <img src={app.image} alt={app.title} className="details-image" />
        <div className="details-info">
          <h2>{app.title}</h2>
          <div>By {app.companyName}</div>
          <div>⭐ {app.ratingAvg} • {app.reviews} reviews • {app.downloads.toLocaleString()} downloads</div>
          <button className="btn primary" disabled={installed} onClick={handleInstall}>{installed? 'Installed' : 'Install'}</button>
        </div>
      </div>

      <section className="review-chart">
        <h3>Review Breakdown</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      <section className="desc">
        <h3>Description</h3>
        <p>{app.description}</p>
      </section>

      {toast && <div className="toast">{toast}</div>}
    </main>
  )
}
