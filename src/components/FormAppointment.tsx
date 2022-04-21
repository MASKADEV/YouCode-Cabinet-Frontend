import axios from 'axios';
import React, { useState, useEffect } from 'react'
// import ApiHandler from '../services/Api';


// interface 

const FormAppointment = () => {

    const [date, setDate] = useState<string>("");
    const [service, setService] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [show, setshow] = useState(false);
    const [availableTime, setAvailableTime] = useState<object[] | null>([{}]);

    const booked_time : string[] = [];

    const times = [{'time' : '08:00', 'booked' : false}, {'time' : '09:00', 'booked' : false}, {'time' : '10:00', 'booked' : false}, 
    {'time' : '11:00', 'booked' : false}, {'time' : '14:00', 'booked' : false}, {'time' : '15:00', 'booked' : false}, 
    {'time' : '16:00', 'booked' : false}, ];

    let url = "http://localhost/cabinet-restapi/users/checkBookedTime";
    async function fetchbookedTrip() {
        booked_time.splice(0, booked_time.length);
       let {data} = await axios.post(url, 
                JSON.stringify({'booking_date' : date}),
                {
                    headers: {
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                        Accept: 'application/json',
                    },
                  },
                );
        data.map((ele : any) => {
            booked_time.push(ele.time);
        });

        times.forEach((element) => {
            if(booked_time.includes(element['time']))
            {
                element['booked']=true;
            }
            else {
                element['booked']=false;
            }
        }); 
        setAvailableTime(times);
        // console.log(availableTime);
    }

    useEffect( () => {
        fetchbookedTrip();
    }, [date])
    
    

  return (
    <div className={`flex-col font-[Poppins] relative items-center flex`}>
        <h1 onClick={() => {setshow(!show)}} className='hover:cursor-pointer shadow-md text-center text-1xl text-indigo-500 font-semibold px-4 py-2 bg-white rounded-lg border-2 border-black w-[10rem]'>Make appointment</h1>
        <div className={`${show ? 'flex' : 'hidden'} absolute top-[1rem] px-4 py4 md:w-[80%] w-[60%] max-w-[500px] rounded-xl shadow-xl  md:h-[35rem] h-[25rem] bg-white border-2 border-gray-100`}>
            <form action="" className='flex flex-col items-center w-full h-full justify-center '>
                <input type="date" value={date} onChange={(e) => {setDate(e.target.value)}} className='w-[220px] py-2 px-2 border-2 border-gray-200 shadow-sm rounded-md' />
                <select value={service} onChange={(e) => {setService(e.target.value)}} className='w-[220px] mt-4 py-2 border-2 border-gray-200 shadow-sm rounded-md px-1' name="" id="">
                    <option value="Teeth Cleanings">Teeth Cleanings</option>
                    <option value="Tooth Extractions">Tooth Extractions</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                </select>
                <select value={time} onChange={(e) => {setTime(e.target.value)}} className='w-[220px] mt-4 py-2 border-2 border-gray-200 shadow-sm rounded-md px-1' name="" id="">
                    {availableTime?.map((element: any) => {
                        if(!element.booked){
                            return <option id={element.time} value={element.time}>{element.time}</option>
                        }
                    })}
                </select>
                <button className='bg-indigo-600 text-white px-4 shadow-md py-2 rounded-md w-[200px] mt-4'>Book</button>
            </form>
        </div>
    </div>
  )
}

export default FormAppointment