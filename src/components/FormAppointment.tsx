import React, { useState } from 'react'


const FormAppointment = () => {

    const [date, setDate] = useState<string>("");
    const [services, setServices] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [show, setshow] = useState(false);

  return (
    <div className={`flex-col font-[Poppins] relative items-center flex`}>
        <h1 onClick={() => {setshow(!show)}} className='hover:cursor-pointer shadow-md text-center text-1xl text-indigo-500 font-semibold px-4 py-2 bg-white rounded-lg border-2 border-black w-[10rem]'>Make appointment</h1>
        <div className={`${show ? 'flex' : 'hidden'} absolute top-[10rem] px-4 py4 md:w-[80%] w-[60%] max-w-[500px] rounded-xl shadow-xl  md:h-[35rem] h-[25rem] bg-white border-2 border-gray-100`}>
            <form action="" className='flex flex-col items-center w-full h-full justify-center '>
                <input type="date" className='w-[220px] py-2 px-2 border-2 border-gray-200 shadow-sm rounded-md' />
                <select onChange={(e) => {setServices(e.target.value)}} className='w-[220px] mt-4 py-2 border-2 border-gray-200 shadow-sm rounded-md px-1' name="" id="">
                    <option value="Teeth Cleanings">Teeth Cleanings</option>
                    <option value="Tooth Extractions">Tooth Extractions</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                </select>
                <select onChange={(e) => {setServices(e.target.value)}} className='w-[220px] mt-4 py-2 border-2 border-gray-200 shadow-sm rounded-md px-1' name="" id="">
                    <option value="08:00">08:00</option>
                    <option value="08:00">09:00</option>
                    <option value="08:00">10:00</option>
                    <option value="08:00">11:00</option>
                    <option value="08:00">14:00</option>
                    <option value="08:00">15:00</option>
                    <option value="08:00">16:00</option>
                </select>
                <button className='bg-indigo-600 text-white px-4 shadow-md py-2 mt-3 rounded-md w-[200px] mt-4'>Book</button>
            </form>
        </div>
    </div>
  )
}

export default FormAppointment