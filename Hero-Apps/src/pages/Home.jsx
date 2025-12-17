import React from 'react'
import apps from '../data/apps.json'
import AppCard from '../components/AppCard'
import { Link } from 'react-router-dom'

export default function Home(){
  const totalDownloads = apps.reduce((s,a)=> s + (a.downloads||0), 0)
  const topRated = apps.reduce((best,a)=> a.ratingAvg>best? a.ratingAvg:best, 0)
  return (
    <main>
      <section className="banner">
        <div className="banner-inner">
          <h1>We Build <br/>
           <span className="purple">Productive</span> Apps</h1>
          <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/>
            Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
          <div className="banner-buttons">
            <a className="btn primary" href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">App Store</a>
            <a className="btn" href="https://play.google.com/store" target="_blank" rel="noreferrer">Play Store</a>
          </div>
        </div>
        <div className="banner-image-wrap">
          <img className="banner-image" src="/assets/hero.png" alt="Hero graphic" />
        </div>
      
      </section>

      <section className="states">
         <div className="states-head">
          <h1>Trusted By Millions, Built For You</h1>
        </div>
  
        <div className="state-cards">
          <div className="state-card">Total Apps<br/><strong>{apps.length}</strong></div>
          <div className="state-card">Total Downloads<br/><strong>{totalDownloads.toLocaleString()}</strong></div>
          <div className="state-card">Top Rating<br/><strong>{topRated}</strong></div>
        </div>
      </section>

      <section className="top-apps">
        <div className="section-head">
          <div className='section-center'>
          <h2>Trendings Apps</h2>
          <p>Explore All Trending Apps on the Market Developed by us </p>
          </div>
        
        </div>
        <div className="apps-grid">
          {apps.slice(0,8).map(a=> <AppCard key={a.id} app={a} />)}
        </div>
        <div className="show-all-wrap">
          <Link to="/apps" className="show-all">Show All</Link>
        </div>
      </section>
    </main>
  )
}
