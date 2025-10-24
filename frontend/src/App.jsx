import './App.css'
import {Routes, Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import CreateThread from './pages/CreateThread'
import ProtectedRoute from './components/protectedRoutes'

const App = () => {
  return (
    <div className='flex flex-col pt-20 items-center w-screen h-screen bg-gray-100 font-[Inter]'>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/home' element={
          <ProtectedRoute>
            <Homepage />
          </ProtectedRoute>
        }/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
