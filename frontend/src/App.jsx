import './App.css'
import Contact from './components/Contact'
import Signup from './components/Signup'
import Courses from './coursesPage/Courses'
import Home from './homepage/Home'
import { BrowserRouter, Routes ,Route, Navigate} from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider'


function App() {
  const[authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={authUser?<Courses />:<Navigate to="/signup"/>} />
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Toaster  toastOptions={{
    className: '',
    style: {
      border: '1px solid gray',
      padding: '17px',
      color: 'blue',
    },
  }}/>
    
    </BrowserRouter>
  )
}

export default App
