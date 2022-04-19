import React from 'react'

interface props {
    placeholder : string,
    id : string,
    setId : React.Dispatch<React.SetStateAction<string>>
}

const CustomInput = ({placeholder, id, setId} : props) => {
  return (
    <div>
        <div className='flex flex-col justify-center sm:w-[60%] w-[70%] mx-auto h-full'>
            <label htmlFor="user_id" className='mt-[40%]'>User ID*</label>
            <input value={id} onChange={(e) => {setId(e.target.value)}} className='px-2 py-3 mt-1 rounded-lg shadow-md' type="text" placeholder={placeholder} />
            <button className='bg-indigo-600 text-white px-4 shadow-md py-2 mt-3 rounded-md'>Sign in</button>
        </div>
    </div>
  )
}

export default CustomInput