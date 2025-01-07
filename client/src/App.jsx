// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


const App = () => {
  useEffect(() => {
    console.log('App component mounted');
    // Log pour vérifier les variables d'environnement (ne pas logger les valeurs sensibles)
    console.log('Environment:', {
      NODE_ENV: process.env.NODE_ENV,
      BASE_URL: import.meta.env.BASE_URL,
      hasApiKey: !!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
    });
  }, []);

  return (
    <div className='min-h-screen bg-slate-50'>
      <NavBar />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/result' element={<Result/>}/>
        <Route path='/buy' element={<BuyCredit/>} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
