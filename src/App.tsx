import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Create from './pages/create/index'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>aa</h1>
        <Routes>
          <Route path="/create" element={<Create />} />
        </Routes>
    </>
  )
}

export default App
