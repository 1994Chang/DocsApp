import React from 'react'
import Background from './component/background.jsx'
import Foreground from './component/Foreground.jsx'

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800 '>
      <Background/>
      <Foreground/>
    </div> 
  )
}

export default App