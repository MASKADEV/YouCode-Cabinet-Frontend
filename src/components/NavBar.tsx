import React from 'react'
import useAuth from '../hooks/useAuth'



const NavBar: React.FC = () => {

  let auth = useAuth();

  return (
      <div>
        {
          auth ? <div className='h-[60px] shadow-lg font-[Poppins] text-indigo-600 font-bold sm:text-xl text-base text-center items-center flex justify-center'>Home</div> : 
          <div className='h-[60px] shadow-lg font-[Poppins] text-indigo-600 font-bold sm:text-xl text-base text-center items-center flex justify-center'>Appointment</div>
        }
      </div>
  )
}

export default NavBar