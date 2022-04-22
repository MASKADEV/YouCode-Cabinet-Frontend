import React from 'react';
import CustomInput from '../../../components/CustomInput';
import axios from 'axios';





const submitForm = async () => {
  console.log('maska');
  
}

const Signup = () => {
  return (
    <div className='container mx-auto md:w-[600px]'>
      <form onSubmit={submitForm} className='flex flex-col'>
          {/* <CustomInput setId={setId} id={id} placeholder ="Enter ID" /> */}
      </form>
    </div>
  )
}

export default Signup