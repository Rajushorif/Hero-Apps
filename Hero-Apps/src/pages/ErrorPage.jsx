import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage(){
  return (
    <main className="error-page">
      <h2>404 — Page Not Found</h2>
      
       <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0'}}>
        <img src="/assets/error-404.png" alt="Not found" style={{maxWidth: '320px', width: '50%'}} />
      </div>
      <p>The page you're looking for doesn't exist.</p>
     <button><Link to="/">Return Home</Link></button>
    </main>
  )
}
