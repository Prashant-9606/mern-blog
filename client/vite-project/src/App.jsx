import { BrowserRouter as Router, 
         Routes,
         Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/signin' element={<SignIn/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route exact path='/projects' element={<Projects/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
