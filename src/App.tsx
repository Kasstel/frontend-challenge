import './App.css'
import { CatsList } from './components/CatsList/CatsList'
import { Header } from './components/Header/Header'
import './assets/fonts/fonts.css'

export interface Cat {
  id: string
  url: string
}

function App() {
  return (
    <div>
      <Header />
      <CatsList />
    </div>
  )
}

export default App
