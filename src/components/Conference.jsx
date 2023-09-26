import React from 'react'
import { useRef } from 'react';
import ConferenceInternational from './ConferenceInternational'
import ConferenceNational from './ConferenceNational'

const Conference = () => {
  const ref = useRef(null);
 

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const handleClick2 = () => {
    window.scrollTo(0, 200)
  }

  return (
    <div>
      <div className='bg-gray-200 p-6 pt-4 mt-4 rounded-2xl drop-shadow-2xl mx-6 lg:mx-10 mb-8'>
        <div ref={ref} className='text-center lg:ml-12 mb-6'><h1 className='text-3xl font-bold'>Conferences</h1></div>
          <div className='flex justify-center p-4 pt-0 gap-6'>
            <button onClick={handleClick2} className='bg-gray-700 p-3 rounded-full text-gray-50 px-3 cursor-pointer drop-shadow-2xl'>International Conferences</button>
            <button onClick={handleClick} className='bg-gray-700 p-3 rounded-full text-gray-50 px-3 cursor-pointer drop-shadow-2xl'>National Conferences</button>
          </div>
          <ConferenceInternational/>
        <div ref={ref}>
          <ConferenceNational />
        </div>
      </div>
    </div>
  )
}

export default Conference

// import { useRef } from 'react';

// export default function App() {
//   const ref = useRef(null);

//   const handleClick = () => {
//     ref.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Scroll to element</button>

//       <div style={{ height: '150rem' }} />

//       <div ref={ref} style={{ backgroundColor: 'lightblue' }}>
//         Coding Beauty
//       </div>

//       <div style={{ height: '150rem' }} />
//     </div>
//   );
// }
