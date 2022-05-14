import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {props} from '../models/appointmentForm';

const FormAppointment:React.FC<props> = ({update, id,show, setShow, date, setDate, price, setPrice, time, setTime, availableTime, setAvailableTime, times, service, setService, booked_time}) => {

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
    
    //Update Function and Booking
    const bookNow = async (e : any) => {
        e.preventDefault();
        try{
            if(!update) {
            if(date!== "" && time!== "" && service!== "" && price > 0 && id! <= 0  )
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
            setShow(!show);
            }else {
                if(date!== "" && time!== "" && service!== "" && price > 0 )
                {
                    let {data} =  await axios.post("http://localhost/cabinet-restapi/users/editBooking", 
                        JSON.stringify({
                            'id':id, 
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
                setShow(!show);
            }
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div className={`flex-col font-[Poppins] relative items-center flex`}>
        
        <div className={`${show ? 'flex' : 'hidden'} absolute my-auto  rounded-xl shadow-xl bg-white border-2 border-gray-100`}>
            <div className='relative'>
                <img onClick={() => {setShow(!show); setPrice(0); setDate(""); setService(""); setTime("")}} className='w-[1rem] absolute right-4 top-3 hover:cursor-pointer' src="https://www.svgrepo.com/show/38282/delete.svg" alt='cancel button'/>
                <form onSubmit={bookNow} className='py-11 px-11 flex flex-col items-center w-full h-full justify-center '>
                    <input required type="date" value={date} onChange={(e) => {setDate(e.target.value)}} className='w-[220px] py-2 px-2 border-2 border-gray-200 shadow-sm rounded-md' />
                    <select required value={service} onChange={(e) => {setService(e.target.value)}} className='w-[220px] mt-4 py-2 border-2 border-gray-200 shadow-sm rounded-md px-1' name="" id="">
                        <option key={1} value="Teeth Cleanings">Teeth Cleanings</option>
                        <option key={2} value="Tooth Extractions">Tooth Extractions</option>
                        <option key={3} value="Teeth Whitening">Teeth Whitening</option>
                    </select>
                    <select required value={time} onChange={(e) => {setTime(e.target.value)}} className='w-[220px] mt-4 py-2 border-2 border-gray-200 shadow-sm rounded-md px-1' name="" id="">
                        {availableTime?.map((element: any, index) => {
                            if(!element.booked){
                                return <option key={index} value={element.time}>{element.time}</option>
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