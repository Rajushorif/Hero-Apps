import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AllApps from './pages/AllApps'
import AppDetails from './pages/AppDetails'
import MyInstallation from './pages/MyInstallation'
import ErrorPage from './pages/ErrorPage'

function App(){
  return (
    <BrowserRouter>
      <Header />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/apps" element={<AllApps/>} />
          <Route path="/apps/:id" element={<AppDetails/>} />
          <Route path="/installation" element={<MyInstallation/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
