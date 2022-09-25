import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <div className=' flex gap-2 font-thin  text-lg text-white flex-col pt-12 pl-10 pr-10 text-center '>
    <div className='text-3xl font-extrabold'>Index</div>
    <Link to='/search' className=' hover:text-yellow-200 bg-black p-2'>SearchPage</Link>
    <Link to='/profile' className=' hover:text-yellow-200 bg-black p-2' >Profile Page</Link>
    <Link to='/create/profile' className=' hover:text-yellow-200 bg-black p-2' >Create Profile Page</Link>
    </div>
    </div>
  )
}

export default Home