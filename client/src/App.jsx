import { useState } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='flex flex-col min-h-screen justify-between'>
        <Header />
        <Home />
        <Footer/>
      </div>
    </>
  )
}

export default App
