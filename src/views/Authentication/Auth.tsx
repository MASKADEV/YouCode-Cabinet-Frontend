import { useNavigate } from 'react-router-dom';
import Signin from './signin/Signin';
import Signup from './signup/Signup';

const Auth = () => {

  const navigate = useNavigate();
  if(localStorage.getItem('logedin') === 'true'){
    navigate('/');
  }
    

  return (
    <div className='w-screen h-screen bg-gray-100 flex md:flex-row flex-col justify-center '>
        <div className=' h-11 md:mt-[20%]'>
          <Signin />
        </div>
        <div className=' h-11 md:mt-[20%]'>
          <Signup />
        </div>
    </div>
  )
}

export default Auth