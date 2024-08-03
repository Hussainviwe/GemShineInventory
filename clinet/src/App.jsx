import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Singin from './pages/Singin'
import SingUp from './pages/SingUp'
import Dashbord from './pages/Dashbord'

export default function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={< About/>} />
       <Route path="/sign-in" element={<Singin/>} />
       <Route path="/sign-up" element={<SingUp />} />
       <Route path="/dashboard" element={<Dashbord/>} />
     </Routes>
    </BrowserRouter>
  )

}
