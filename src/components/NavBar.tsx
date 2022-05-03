import React from 'react'
import useAuth from '../hooks/useAuth'


const NavBar: React.FC = () => {


  let auth = useAuth();
  const logout = () => {
    localStorage.removeItem("toekn");
    localStorage.removeItem("logedin");
    localStorage.removeItem("user_id");
    window.location.reload();
  }

  return (
      <div>
        {
          auth ? <div className='h-[60px] shadow font-[Poppins] text-indigo-600 font-bold sm:text-xl text-base text-center items-center flex justify-center'>Home</div> : 
          <div className='h-[60px] shadow font-[Poppins] text-indigo-600 font-bold sm:text-xl text-base text-center items-center flex justify-center'>Appointment</div>
        }
        <div>
        {
          auth ? <div onClick={logout} className='h-[60px] hover:cursor-pointer absolute top-4 right-5 font-[Poppins] text-indigo-600 font-medium sm:text-md text-base text-center flex justify-center'>Logout</div> :
          <div></div>
        }
        </div>
      </div>
  )
}

export default NavBar