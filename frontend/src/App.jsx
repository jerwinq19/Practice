import './App.css'
import {Routes, Route} from 'react-router-dom'
import Register from './components/register'
import Login from './components/login'

const App = () => {
  return (
    <div className='flex flex-col justify-center p-20 items-center w-screen h-screen bg-gray-200 font-[Inter ]'>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </div>
  )
}

export default App
