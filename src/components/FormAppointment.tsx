import axios from 'axios';
import React, { useState, useEffect } from 'react'
// import ApiHandler from '../services/Api';


// interface 

const FormAppointment = () => {

    const [date, setDate] = useState<string>("");
    const [service, setService] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [time, setTime] = useState<string>("");
    const [show, setshow] = useState(false);
    const [availableTime, setAvailableTime] = useState<object[] | null>([{}]);
    const booked_time : string[] = [];

    const times = [{'time' : '08:00', 'booked' : false}, {'time' : '09:00', 'booked' : false}, {'time' : '10:00', 'booked' : false}, 
    {'time' : '11:00', 'booked' : false}, {'time' : '14:00', 'booked' : false}, {'time' : '15:00', 'booked' : false}, 
    {'time' : '16:00', 'booked' : false}, ];

    

    useEffect( () => {
        async function fetchbookedTrip() {
            booked_time.splice(0, booked_time.length);
           let {data} = await axios.post("http://localhost/cabinet-restapi/users/checkBookedTime", 
                    JSON.stringify({'booking_date' : date}),
                    {
                        headers: {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            Accept: 'application/json',
                        },
                      },
                    );
            data.map((ele : any) => {
                return booked_time.push(ele.time);
            });
            // console.log(data);
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
        }
        fetchbookedTrip();
    }, [date])

    useEffect(() => {
        switch(service) {
            case "Teeth Cleanings":
                setPrice(200);
                break;
            case "Tooth Extractions":
                setPrice(159);
                break;
            case "Teeth Whitening":
                setPrice(599);
                break;
            default:
                setPrice(0);
                break;
        }
    }, [service]);
    
    const bookNow = async (e : any) => {
        try{
            e.preventDefault();
            if(date!== "" && time!== "" && service!== "" && price > 0 )
            {
                
                await axios.post("http://localhost/cabinet-restapi/users/addBooking", 
                    JSON.stringify({
                        'user_id' : localStorage.getItem('user_id'),
                        'booking_date' : date,
                        'time' : time,
                        'service_type' : service,
                        'price' : price,
                    }),
                    {
                        headers: {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            Accept: 'application/json',
                        },
                    },
                );
                window.location.reload();
            }else {
                if(date !== ''){
                    
                }
            }
            setshow(!show);
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div className={`flex-col font-[Poppins] relative items-center flex`}>
        <h1 onClick={() => {setshow(!show)}} className='hover:cursor-pointer shadow-md text-center text-1xl text-indigo-500 font-semibold px-4 py-2 bg-white rounded-lg border-2 border-black w-[10rem]'>Make appointment</h1>
        <div className={`${show ? 'flex' : 'hidden'} absolute my-auto  rounded-xl shadow-xl bg-white border-2 border-gray-100`}>
            <div className='relative'>
                <img onClick={() => {setshow(!show)}} className='w-[1rem] absolute right-4 top-3 hover:cursor-pointer' src="https://www.svgrepo.com/show/38282/delete.svg" alt='cancel button'/>
                <form onSubmit={bookNow} className='py-11 px-11 flex flex-col items-center w-full h-full justify-center '>
                    <input required type="date" value={date} onChange={(e) => {setDate(e.target.value)}} className='w-[220px] py-2 px-2 border-2 border-gray-200 shadow-sm rounded-md' />
                    <select required value={service} onChange={(e) => {setService(e.target.value)}} className='w-[220px] mt-4 py-2 border-2 border-gray-200 shadow-sm rounded-md px-1' name="" id="">
                        <option key={1} value="Teeth Cleanings">Teeth Cleanings</option>
                        <option key={2} value="Tooth Extractions">Tooth Extractions</option>
                        <option key={3} value="Teeth Whitening">Teeth Whitening</option>
                    </select>
                    <select required value={time} onChange={(e) => {setTime(e.target.value)}} className='w-[220px] mt-4 py-2 border-2 border-gray-200 shadow-sm rounded-md px-1' name="" id="">
                        {availableTime?.map((element: any) => {
                            if(!element.booked){
                                return <option key={element.time} value={element.time}>{element.time}</option>
                            }else {
                                return '';
                            }
                        })}
                    </select>
                    <div className='flex flex-row items-center'>
                        <p className='font-[Poppins] mt-4 mr-2 font-semibold text-3xl'>{price}$</p>
                        <button className='bg-indigo-600 ml-2 text-white px-4 shadow-md py-2 rounded-md w-[140px] mt-4'>Book</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default FormAppointment