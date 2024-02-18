import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Projects from './pages/projects'
import Header from './components/Header'

export default function App() {
  return (
<BrowserRouter>

<Header />
<Routes>
  <Route path="/" element= { <Home />}/>
  <Route path="/sign-in" element= { <Signin />}/>
  <Route path="/sign-up" element= { <Signup />}/>
  <Route path="/dashboard" element= { <Dashboard />}/>
  <Route path="/About" element= { < About/>}/>
  <Route path="/Projects" element= { <Projects />}/>

</Routes>

</BrowserRouter>
  )
}
