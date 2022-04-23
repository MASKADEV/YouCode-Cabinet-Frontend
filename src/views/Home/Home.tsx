import {useEffect, useState} from 'react'
import axios from 'axios';
import FormAppointment from '../../components/FormAppointment'

const Home = () => {

  const [details, setDetails] = useState<Array<any>>([{}]);

  useEffect(() => {
    const fetchBooking = async () => {   
        try{
            const {data} = await axios.post("http://localhost/cabinet-restapi/users/fetchBooking", 
                JSON.stringify({
                    'user_id' : 'maska',
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
//   if(!details) return <p>Loading ....</p>
//   return <div>{`${details}`}</div>;
  return (
    <div className='mt-11'>
        <FormAppointment />
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
                              details.map((ele : any) => 
                                 (<tr key={ele.id} className="whitespace-nowrap">
                                          <td className="px-6 py-4">
                                              {ele.booking_date} {ele.time}
                                          </td>
                                          <td className="px-6 py-4 text-sm text-gray-500">
                                              {ele.service_type}
                                              {/* maska */}
                                          </td>
                                          <td className="px-6 py-4">
                                              <a href="#">
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none"
                                                      viewBox="0 0 24 24" stroke="currentColor">
                                                      <path 
                                                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                  </svg>
                                              </a>
                                          </td>
                                          <td className="px-6 py-4">
                                              <a href="#">
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" fill="none"
                                                      viewBox="0 0 24 24" stroke="currentColor">
                                                      <path  
                                                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                  </svg>
                                              </a>
                                          </td>
                                      </tr>)
                                )
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