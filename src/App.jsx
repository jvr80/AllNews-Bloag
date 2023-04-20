import Navbar from "./components/Navbar"
import { NewsProvider } from "./context/NewsContext"
import Home from "./pages/Home"

function App() {
  

  return (
   <NewsProvider>
   <Navbar/>
   <Home/>
   </NewsProvider>
  )
}

export default App
