import React from 'react'
import Patent from './Patent'
import BookChapter from './BookChapter'

const Research = () => {
  return (
    <div>
      <div className=' lg:ml-12 mb-6'><h1 className='text-3xl font-bold'>Research Publications Section:</h1></div>
      <Patent/>
      <BookChapter/>
    </div>
  )
}

export default Research
