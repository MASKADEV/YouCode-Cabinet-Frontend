import React, {useEffect, useState} from 'react';
import CustomInput from '../../../components/CustomInput';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [id, setId] = useState<string>("")
  const navigate = useNavigate();
  const submitForm = async (e : any) => {
    e.preventDefault();
    let {data} = await axios.post("http://localhost/cabinet-restapi/users/signin", 
                    JSON.stringify({'user_id' : id}),
                    {
                        headers: {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            Accept: 'application/json',
                        },
                      },
            );
        if(data.message === 'Logedin!')
        {
          localStorage.setItem('logedin', 'true');
          localStorage.setItem('user_id', data.user_id);
          localStorage.setItem('token', data.token);
          navigate('/');
          window.location.reload();
        }else {
        }
  }

  return (
    <div className='container mx-auto md:w-[600px]'>
      <form onSubmit={submitForm} className='flex flex-col'>
          <CustomInput setId={setId} id={id} placeholder ="Enter ID" />
      </form>
    </div>
  )
}

export default Signin