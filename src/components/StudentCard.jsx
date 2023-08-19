import React from 'react'
import {AiFillMail} from 'react-icons/ai'

const StudentCard = (props) => {
  return (
    <div>
      <div className='bg-gray-50 inline-block text-center p-6 rounded-2xl drop-shadow-2xl'>
            <div><img src={props.photo} alt={props.photo} className='w-auto h-64 rounded-2xl drop-shadow-2xl'/></div>
            <div className='mt-2'>
                <h1>{props.name}</h1>
                <p>{props.position}</p>
                <p>{props.branch}</p>
                <p>{props.university}</p>
                <div className='flex flex-row gap-1 justify-center cursor-pointer' onClick={() => {
                      window.open(`mailto:${props.email}`);
                  }} >
                    <AiFillMail className='mt-1'/>
                    <p>Email</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentCard
