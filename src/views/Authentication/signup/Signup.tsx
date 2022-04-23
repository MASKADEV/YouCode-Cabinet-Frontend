import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Signup = () => {

  const [full_name, setFull_name] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [password_confirmation, setpassword_confirmation] = useState<string>("");
  const [errors , seterros] = useState<string>("");
  let navigate = useNavigate();

  const submitHandle = async (e : any) => {
    e.preventDefault();
    let {data} = await axios.post('http://localhost/cabinet-restapi/users/signup', 
      JSON.stringify({
        'full_name' : full_name,
        'email' : email,
        'password' : password,
        'password_confirmation' : password_confirmation,
    }), 
      {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
          Accept: 'application/json',
        },
      }
    )
      console.log(data);

    if(data.error === true) {
      localStorage.setItem('logedin', 'true');
      localStorage.setItem('user_id', data.user_id);
      localStorage.setItem('token', data.token);
      navigate('/');
      window.location.reload();
    }else {
      console.log('im here');
      seterros(data.message);
    }
  }

  return (
    <div className='container mx-auto px-3 py-4 md:w-[400px]'>
      <h1 className='text-xl text-indigo-500 font-[Poppins] font-semibold py-4'>REGISTER</h1>
      <form onSubmit={submitHandle} className='flex flex-col'>
          <div className='flex flex-col'>
            <label htmlFor="full_name" >Full Name*</label>  
            <input required value={full_name} onChange={(e) => {setFull_name(e.target.value)}} className='px-2 py-3 mt-1 rounded-lg shadow-md' type="text" placeholder="Full Name" />
          </div>
          <div className='flex flex-col mt-4'>
            <label htmlFor="email" >Email*</label>  
            <input required value={email} onChange={(e) => {setemail(e.target.value)}} className='px-2 py-3 mt-1 rounded-lg shadow-md' type="email" placeholder="Email" />
          </div >
          <div className='flex flex-col mt-4'>
            <label htmlFor="password" >Password*</label>  
            <input required value={password} onChange={(e) => {setpassword(e.target.value)}} className='px-2 py-3 mt-1 rounded-lg shadow-md' type="password" placeholder="Password" />
          </div>
          <div className='flex flex-col mt-4'>
            <label htmlFor="password_confirmation" >Password Confirmation*</label>  
            <input required value={password_confirmation} onChange={(e) => {setpassword_confirmation(e.target.value)}} className='px-2 py-3 mt-1 rounded-lg shadow-md' type="password" placeholder="Password Confirmation" />
          </div>
          <button type='submit' className='bg-indigo-600 text-white px-4 shadow-md py-2 mt-4 rounded-md'>Sign up</button>
          {errors !== "" ? <h1 className='text-red-500 font-[Poppins] font-semibold text-sm text-center'>{errors}</h1> : <div></div> }
      </form>
    </div>
  )
}

export default Signup