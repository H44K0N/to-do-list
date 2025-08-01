import { Routes, Route } from 'react-router-dom'
import Starfield from './Starfield'
import AuthCard from './AuthCard'
import Dashboard from './Dashboard'

function App() {
  return (
    <>
      <Starfield />
      <main>
        <Routes>
          <Route path="/" element={<AuthCard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  )
}

export default App

