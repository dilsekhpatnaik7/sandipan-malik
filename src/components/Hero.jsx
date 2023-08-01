import React from 'react'
import sandipan from '../assets/sandipan.jpg'
import resume from '../assets/Sandipan MalkResume.docx'
import {AiFillContacts, AiFillMail, AiFillLinkedin} from 'react-icons/ai'
import {SiGooglescholar} from 'react-icons/si'
import {FaResearchgate} from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="bg-texta mx-auto pb-12 px-4 items-center lg:flex lg:flex-row-reverse md:px-8">
        <div className="flex-1 text-center lg:mt-0 lg:ml">
            <img src={sandipan} alt={sandipan}className="w-full mx-auto sm:w-10/12  lg:w-full rounded-xl shadow-2xl" />
        </div>
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
            <div className='lg:-ml-28 text-left md:text-center sm:text-center md:mt-4 sm:mt-4 mt-2'>
                <h1 className="text-bg1 font-bold text-4xl xl:text-5xl">
                    Dr. Sandipan Malik, PhD
                </h1>
            </div>
            <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Associate Professor, 
            Department of Electronics Communication Engineering (NBA Accredited), 
            NIST Institute of Science and Technology (Autonomous), 
            Pallur Hills, Berhampur, Orissa, India, PIN: 760008.

            </p>
            <div className=" items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                <a href={resume} className="px-7 py-3 w-full bg-bg1 text-text2 text-center rounded-md block sm:w-auto">
                    Resume
                </a>
            </div>
            
            <div className='pt-4 lg:text-left text-center block'>
                <div className='inline-block '>
                    <div className='flex lg:justify-start sm:justify-evenly gap-2 '>
                        <AiFillContacts size={28}/> 
                        <p className='font-semibold text-xl'>Connect With Me</p>
                    </div>
                    <div>
                        <div className='grid grid-cols-2 gap-2 mt-3'>
                            <div className='flex space-x-2 cursor-pointer' onClick={() => window.open('mailto:sandipan@nist.edu')}>
                                <AiFillMail size={27} color=''/>
                                <p>Email</p>
                            </div>

                            <div className='flex space-x-2 cursor-pointer' onClick={() => window.open('https://www.linkedin.com/in/dr-sandipan-mallik-68b0b365/')}>
                                <AiFillLinkedin size={27} color=''/>
                                <p>Linkedln</p>
                            </div>

                            <div className='flex space-x-2 cursor-pointer' onClick={() => window.open('https://scholar.google.co.in/citations?user=HneMfQLbGt0C&hl=en')}>
                                <SiGooglescholar size={27} />
                                <p>Google Scholar</p>
                            </div>

                            <div className='flex space-x-2 cursor-pointer' onClick={() => window.open('https://researchgate.net/profile/Sandipan_Mallik')}>
                                <FaResearchgate size={27}/>
                                <p>Reaseach Gate</p>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Hero
