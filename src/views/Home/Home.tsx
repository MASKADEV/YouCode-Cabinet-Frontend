import {useEffect, useState} from 'react'
import axios from 'axios';
import FormAppointment from '../../components/FormAppointment'

const Home = () => {

  const [details, setDetails] = useState<Array<any>>([{}]);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [time, setTime] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [update , setUpdate] = useState<boolean>(false);
  const [availableTime, setAvailableTime] = useState<object[] | null>([{}]);
  const booked_time : string[] = [];

  const times = [{'time' : '08:00', 'booked' : false}, {'time' : '09:00', 'booked' : false}, {'time' : '10:00', 'booked' : false}, 
  {'time' : '11:00', 'booked' : false}, {'time' : '14:00', 'booked' : false}, {'time' : '15:00', 'booked' : false}, 
  {'time' : '16:00', 'booked' : false}, ];


  useEffect(() => {
    const fetchBooking = async () => {   
        try{
            const {data} = await axios.post("http://localhost/cabinet-restapi/users/fetchBooking", 
                JSON.stringify({
                    'user_id' : localStorage.getItem('user_id'),
                }),
                {
                    headers: {
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                        Accept: 'application/json',
                    },
                },
            );
            // console.log(data);
            setDetails(JSON.parse(data));
            
            } catch(err){
            console.log(err);
        }
    }
    fetchBooking();
  },[]);

  const editAppointment = (id : number, date: string, service:string, price:number) => {
    setId(id);
    setUpdate(!update);
    setDate(date);
    setService(service);
    setPrice(price);
    let _id = id;
    setShow(!show);
  }

  const deleteBooking = async (id : number) => {
      await axios.get(`http://localhost/cabinet-restapi/users/deleteBooking/${id}`);
      window.location.reload();
  }

  return (
    <div className='mt-11 flex flex-col justify-center'>
        <h1 onClick={() => {setShow(!show)}} className='hover:cursor-pointer shadow-md self-center text-center text-1xl text-indigo-500 font-semibold px-4 py-2 bg-white rounded-lg border-2 border-black w-[10rem]'>Make appointment</h1>
        <FormAppointment update={update} show={show} setShow={setShow} 
            date={date} setDate={setDate} service = {service} setService={setService}
            price={price} setPrice={setPrice} time={time} setTime={setTime}
            availableTime={availableTime} setAvailableTime={setAvailableTime}
            booked_time={booked_time} times={times}
            id={id}
        />
        <div className="container flex justify-center mx-auto">
          <div className="flex flex-col mt-24">
              <div className="w-full">
                  <div className="border-b border-gray-200 shadow">
                      <table className="divide-y divide-gray-300 ">
                          <thead className="bg-gray-50 overflow-hidden">
                              <tr>
                                  <th className="px-6 py-2 text-xs text-gray-500">
                                      Date
                                  </th>
                                  <th className="px-6 py-2 text-xs text-gray-500">
                                      Service
                                  </th>
                                  <th className="px-6 py-2 text-xs text-gray-500">
                                      Edit
                                  </th>
                                  <th className="px-6 py-2 text-xs text-gray-500">
                                      Delete
                                  </th>
                              </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-300">
                              {
                              details.map((ele : any, index) => 
                                 (<tr key={index} className="whitespace-nowrap">
                                          <td className="px-6 py-4">
                                              {ele.booking_date} {ele.time}
                                          </td>
                                          <td className="px-6 py-4 text-sm text-gray-500">
                                              {ele.service_type}
                                              {/* maska */}
                                          </td>
                                          <td className="px-6 py-4">
                                              <button onClick={(e : any) => {e.preventDefault(); editAppointment(ele.id, ele.booking_date, ele.service_type, ele.price)}}>
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none"
                                                      viewBox="0 0 24 24" stroke="currentColor">
                                                      <path 
                                                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                  </svg>
                                              </button>
                                          </td>
                                          <td className="px-6 py-4">
                                              <button onClick={() => {deleteBooking(ele.id);}}>
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" fill="none"
                                                      viewBox="0 0 24 24" stroke="currentColor">
                                                      <path  
                                                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                  </svg>
                                              </button>
                                          </td>
                                      </tr>)                                )
                              }
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Home