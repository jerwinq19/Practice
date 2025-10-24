import LogoutButton from '../components/logoutButton'
import ThreadPost from '../components/threadPost'
import { useState, useEffect } from 'react'


const Homepage = () => {
  const [threads, setThreads] = useState([])
  
  return (
    <div className='flex flex-row gap-5 bg-gray-100 w-screen h-screen p-5'>
      <div className='w-1/5 bg-white shadow-lg rounded-xl'>NAV</div> 
      <div className=' p-10 bg-white shadow-lg rounded-xl w-4/5'>
      <ThreadPost />
      </div>
      
    </div>
  )
}

export default Homepage
