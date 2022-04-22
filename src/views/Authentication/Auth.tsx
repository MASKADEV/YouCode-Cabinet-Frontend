import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../components/CustomInput';
import Signin from './signin/Signin';
import Signup from './signup/Signup';

const Auth = () => {

  const navigate = useNavigate();
  if(localStorage.getItem('logedin') === 'true'){
    navigate('/');
  }
    

  return (
    <div className='w-screen h-screen bg-gray-100 flex md:flex-row flex-col'>
        <div>
          <Signin />
        </div>
        <div>
          <Signup />
        </div>
    </div>
  )
}

export default Auth