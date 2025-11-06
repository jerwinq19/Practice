import './App.css'
import {Routes, Route} from 'react-router-dom'
import ProtectedRoute from './components/protectedRoutes'
import Register from './pages/register'
import Login from './pages/login'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import ThreadView from './pages/ThreadView'
<<<<<<< HEAD
import UserPorfile from './pages/ProfilePage'
import DashboardView from './pages/Dashboard'

=======
import AdminDashboard from './pages/AdminDashboard'
>>>>>>> 9851313a85a9bb9bbef4f61e2424563cd6056570

const App = () => {
  return (
    <div className='flex flex-col items-center w-screen h-screen bg-gray-200 font-[Inter]'>
      <Routes>
        <Route path='/' element={<Login />}/>
        {/* <Route path='/' element={<AdminDashboard />}/> */}
        <Route path='/register' element={<Register />}/>
        <Route path='/home' element={
          <ProtectedRoute>
            <Homepage />
          </ProtectedRoute>
        }/>
        <Route path='/thread/:threadID' element={
          <ProtectedRoute>
            <ThreadView />
          </ProtectedRoute>
        }/>
        <Route path='/profile/' element={
          <ProtectedRoute>
            <UserPorfile />
          </ProtectedRoute>
        }/>
        <Route path='/dashboard/' element={
          <ProtectedRoute>
            <DashboardView />
          </ProtectedRoute>
        }/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
