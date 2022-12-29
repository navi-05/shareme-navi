import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdAdd, IoMdSearch } from 'react-icons/io'

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate(); 

  if(!user) return null; 

  return (
    <div className='flex gap-2 md:gap-3 w-full mt-5 pb-7'>
        <div className='flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm'>
            <IoMdSearch fontSize={21} className="ml-1" />
            <input 
             type="text"
             onChange={(e) => setSearchTerm(e.target.value)}
             placeholder="Search"
             value={searchTerm}
             onFocus={() => navigate('/search')}
             className="p-2 w-full bg-white outline-none" 
            />
            <Link to={`user-profile/${user?._id}`} className="hidden md:block">
                <img src={user.image} alt="user-image" className='w-10 h-10 md:w-11 md:rounded-full lg:w-11 xl:w-10 lg:rounded-lg' />
            </Link>
        </div>

        <div className='flex gap-3'>
            <Link to='create-pin' className="bg-black text-white rounded-md w-10 h-10 md:w-12 md:h-12 flex justify-center items-center  ">
                <IoMdAdd />
            </Link>
        </div>
    </div>
  )
}

export default Navbar