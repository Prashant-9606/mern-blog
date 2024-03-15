import { BrowserRouter as Router, 
         Routes,
         Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
import About from './pages/About'
import Header from './components/Header'
function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/signin' element={<SignIn/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route exact path='/projects' element={<Projects/>}/>
          <Route exact path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
