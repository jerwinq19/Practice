import './App.css'
import {Routes, Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <div className='flex flex-col pt-20 items-center w-screen h-screen bg-gray-200 font-[Inter]'>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/home' element={<Homepage />}/>
      </Routes>
    </div>
  )
}

export default App
