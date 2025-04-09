import './App.css'
import './components/SaleItem'
import TopBar from './components/TopBar'
import MainContent from './pages/HomePage'
import { HashRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import AdminPanel from './pages/AdminPanel'

function App() {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={
                <div style={{ boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)' }}>
                    <><TopBar /><MainContent /></>
                </div>
            } />

            <Route path="/login" element={
                <div style={{ boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)' }}>
                    <><TopBar /><LoginPage /></>
                </div>
            } />

            <Route path="/admin" element={
                <div style={{ boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)' }}>
                    <><TopBar /><AdminPanel /></>
                </div>
            } />

            {['/', '/guitars', '/stereo', '/keyboards', '/drums', '/car-parts', '/dj-audio-gear'].map((path) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <div style={{ boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)' }}>
                            <><TopBar /><MainContent /></>
                        </div>
                    }
                />
            ))}
        </Routes>
    </HashRouter>
  )
}

export default App;