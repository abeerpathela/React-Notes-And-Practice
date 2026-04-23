import { useState } from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'

function App() {

  return (
    <>
      <WelcomeMessage name="Alice" language="en"/> 
      <WelcomeMessage name="Chloe" language="fr"/>
    </>
  )
}

export default App
