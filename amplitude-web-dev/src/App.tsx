import './App.css'
import './components/SaleItem'
import TopBar from './components/TopBar'
import MainContent from './components/MainContent'

function App() {
  return (
    <div className="app">
        <TopBar />
        <MainContent />
    </div>
  )
}

export default App;