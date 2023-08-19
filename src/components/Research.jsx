import React from 'react'
import Patent from './Patent'
import BookChapter from './BookChapter'

const Research = () => {
  return (
    <div>
      <div className='bg-gray-200 p-6 pt-4 mt-4 rounded-2xl drop-shadow-2xl mx-6 lg:mx-10 mb-8'>
        <div className='text-center lg:ml-12 mb-6'><h1 className='text-3xl font-bold'>Research Publications Section:</h1></div>
        <Patent/>
        <BookChapter/>
      </div>
    </div>
  )
}

export default Research
