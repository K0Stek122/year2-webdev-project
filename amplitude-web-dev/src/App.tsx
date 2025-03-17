import './App.css'
import './components/SaleItem'
import TopBar from './components/TopBar'
import MainContent from './components/MainContent'
import { HashRouter, Routes, Route } from 'react-router-dom' 

function App() {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<><TopBar /><MainContent /></>} />
        </Routes>
    </HashRouter>
  )
}

export default App;