import './App.css'
import './components/SaleItem'
import TopBar from './components/TopBar'
import MainContent from './components/MainContent'
import { HashRouter, Routes, Route } from 'react-router-dom' 

function App() {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={
                <div style={{ boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)' }}>
                    <><TopBar /><MainContent /></>
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