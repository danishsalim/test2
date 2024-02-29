import './App.css'
import Admin from './Components/Admin'
import Consumer from './Components/Consumer'
import ContextProvider from './store/ContextProvider'
function App() {
  return (
    <ContextProvider>
      <Admin />
      <Consumer />
    </ContextProvider>
  )
}

export default App
