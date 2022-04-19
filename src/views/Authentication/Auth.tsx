import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput';

const Auth = () => {

    const [id, setId] = useState<string>("")
    console.log(id);

  return (
    <div className='w-screen h-screen bg-gray-100'>
        <div className='container mx-auto'>
            <form onSubmit={(e) => {e.preventDefault(); console.log(e)}} className='flex flex-col'>
                <CustomInput setId={setId} id={id} placeholder ="Enter ID" />
            </form>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Auth