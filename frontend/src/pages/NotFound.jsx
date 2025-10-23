import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full'>
        <h1 className='text-8xl font-bold mb-4 bg-linear-to-r from-cyan-500 to-blue-900 text-transparent bg-clip-text'>404</h1>
        <p className='text-2xl text-blue-950'>Page Not Found</p>
        <Link to='/' className="text-blue-500 mt-50 font-bold"> RETURN TO LOGIN</Link>
    </div>
  )
}

export default NotFound
