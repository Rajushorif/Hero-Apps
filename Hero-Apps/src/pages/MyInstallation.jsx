import React, {useState, useEffect} from 'react'
import appsData from '../data/apps.json'

export default function MyInstallation(){
  const [installed, setInstalled] = useState([])
  const [toast, setToast] = useState('')

  useEffect(()=>{
    const list = JSON.parse(localStorage.getItem('installedApps')||'[]')
    setInstalled(list)
  },[])

  function handleUninstall(id){
    const list = JSON.parse(localStorage.getItem('installedApps')||'[]').filter(x=> x!==id)
    localStorage.setItem('installedApps', JSON.stringify(list))
    setInstalled(list)
    setToast('App uninstalled')
    setTimeout(()=> setToast(''), 1800)
  }

  const installedApps = installed.map(id=> appsData.find(a=> a.id===id)).filter(Boolean)

  return (
    <main>
      <h2>My Installation</h2>
      {installedApps.length===0 ? <p>No installed apps.</p> : (
        <div className="apps-grid all">
          {installedApps.map(a=> (
            <div key={a.id} className="installed-card">
              <img src={a.image} alt={a.title} />
              <div>
                <h4>{a.title}</h4>
                <div className="meta">{a.downloads.toLocaleString()} downloads</div>
                <button className="btn" onClick={()=> handleUninstall(a.id)}>Uninstall</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {toast && <div className="toast">{toast}</div>}
    </main>
  )
}
