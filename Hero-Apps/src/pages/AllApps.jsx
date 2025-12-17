import React, {useState, useMemo} from 'react'
import appsData from '../data/apps.json'
import AppCard from '../components/AppCard'

export default function AllApps(){
  const [query,setQuery] = useState('')
  const [sort,setSort] = useState('')

  const filtered = useMemo(()=>{
    let list = appsData.filter(a=> a.title.toLowerCase().includes(query.toLowerCase()))
    if(sort==='high-low') list = list.slice().sort((a,b)=> b.downloads - a.downloads)
    if(sort==='low-high') list = list.slice().sort((a,b)=> a.downloads - b.downloads)
    return list
  },[query,sort])

  return (
    <main>
      <header className="allapps-header">
        <div>
          <h2>All Apps</h2>
          <p className="subtitle">Browse the complete catalog</p>
        </div>
        <div className="search-controls">
          <div className="total-count">Total: {appsData.length}</div>
          <input placeholder="Search apps..." value={query} onChange={e=> setQuery(e.target.value)} />
          <select value={sort} onChange={e=> setSort(e.target.value)}>
            <option value="">Sort by downloads</option>
            <option value="high-low">High-Low</option>
            <option value="low-high">Low-High</option>
          </select>
        </div>
      </header>

      <section className="apps-list">
  {filtered.length === 0 ? (
    <div className="no-apps">
      <img
        src="/assets/App-Error.png"
        alt="No apps"
        className="no-apps-img"
      />
      <p>No App Found</p>
    </div>

  ) : (
    <div className="apps-grid all">
      {filtered.map(a => (
        <AppCard key={a.id} app={a} />
      ))}
    </div>
  )}
</section>
    </main>
  )
}
