import React from 'react'
import sandipan from '../assets/sandipan.jpg'
import resume from '../assets/Sandipan MalkResume.docx'
import {AiFillContacts, AiFillMail, AiFillLinkedin} from 'react-icons/ai'
import {SiGooglescholar} from 'react-icons/si'
import {FaResearchgate} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className=''>
        <section className="bg-texta mx-auto pb-12 px-4 items-center lg:flex lg:flex-row-reverse md:px-8">
            <div className="flex-1 text-center">
                <img src={sandipan} alt={sandipan}className="w-62 h-auto mx-auto sm:w-10/12 lg:w-full -w-fit rounded-2xl mt-4 drop-shadow-2xl" />
            </div>
            <div className=' lg:flex lg:justify-center p-6 bg-gray-200 rounded-2xl drop-shadow-2xl mt-4 lg:mt-0'>
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <div className=' bg-gray-50 lg:mr-10 p-4 rounded-2xl drop-shadow-xl'>
                        <div className='lg:-ml-38 text-center md:text-center sm:text-center md:mt-4 sm:mt-4'>
                            <h1 className="text-[#060b15] font-bold text-4xl xl:text-5xl">
                                Sandipan Mallik, PhD
                            </h1>
                        </div>
                        <p className="text-gray-900 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 pt-2">
                        Associate Professor, 
                        Department of Electronics Communication Engineering (NBA Accredited), 
                        NIST Institute of Science and Technology (Autonomous), 
                        Pallur Hills, Berhampur, Orissa, India, PIN: 761008.

                        </p>
                    </div>
                    {/* <div className=" items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <a href={resume} className="px-7 py-3 w-full bg-bg1 text-text2 text-center rounded-md block sm:w-auto">
                            Resume
                        </a>
                    </div> */}
                    
                    <div className='border-2 bg-gray-50 p-2 rounded-2xl shadow-inner'>
                        <div className='pt-4 lg:text-left text-center block'>
                            <div className='inline-block '>
                                <div className='flex lg:justify-start sm:justify-evenly gap-2 '>
                                    <AiFillContacts size={28}/> 
                                    <p className='font-semibold text-xl'>Connect With Me</p>
                                </div>
                                <div>
                                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 mt-3'>
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

                </div>
            </div>
    </section>
        
        <div className='p-4 bg-gray-200 rounded-2xl drop-shadow-2xl lg:mx-20 mx-4'>
            <div className='text-center bg-slate-50 p-4 lg:p-8 rounded-2xl drop-shadow-2xl m-3 lg:mx- lg:mx-20'>
                <div className="objective">
                <h1 className='font-bold text-2xl inline-block border-b mb-2'>Career Objective</h1>
                <p className=''>
                The implementation of semiconductor related courses in academic institutions serves as a strategic move towards realizing India's dream of becoming a global electronics hub. The incorporation of these courses enhances students' resumes, equips them with specialized skills for the electronics industry, and aligns them with the nation's vision of technological advancement. By fostering industry-academia collaborations and inspiring high-level research, these courses catalyze India's journey towards self-reliance in semiconductor technologies and position it as a dominant player in the global semiconductor landscape.
                </p>
                <p className='mt-4 font-semibold'>With a keen understanding of the significance of India's burgeoning semiconductor ecosystem, I firmly believe that every academic institution holds a pivotal role in nurturing skilled manpower and engaging with the student community to pave the way for future innovation. My following extensive expertise in the semiconductor domain positions me as a valuable asset, poised to contribute significantly to the growth and development of the semiconductor industry and inspire the next generation of engineers and researchers.</p>
                </div>
            </div>
        </div>

        <div className='p-4 bg-gray-200 rounded-2xl drop-shadow-2xl lg:mx-20 mx-4 mt-6 mb-6'>
            <div className=' bg-slate-50 p-4 lg:p-8 rounded-2xl drop-shadow-2xl m-4 lg:mx-20'>
                <div className="experience">
                <div className='lg:text-left text-center'><h1 className='font-bold text-2xl inline-block border-b mb-2'>Experience</h1></div>
                <div className='px-4'>
                    <ul className='list-disc'>
                    <li className=''>
                        <div className=''>
                        <p className='font-semibold'>Associate Professor</p>
                        <p>Department of Electronics Communication Engineering, National Institute of Science and Technology, Pallur Hills, Berhampur, Orissa, 761008 </p>
                        <p className='font-semibold'>(April 2019 - Present)</p>
                        </div>
                    </li>

                    <li className='mt-4'>
                        <div className=''>
                        <p className='font-semibold'>Assistant Professor</p>
                        <p>Department of Electronics Communication Engineering, National Institute of Science and Technology, Pallur Hills, Berhampur, Orissa, 761008 </p>
                        <p className='font-semibold'>(July 2014 - April 2019)</p>
                        </div>
                    </li>

                    <li className='mt-4'>
                        <div className=''>
                        <p className='font-semibold'>Project Scholar</p>
                        <p>VLSI Engineering Lab, Department of E & ECE, Indian Institute of Technology Kharagpur, 721302 [Supervisor: Prof. C. K. Maiti, Department of E & ECE, Kharagpur] </p>
                        <p className='font-semibold'>(August 2008 - June 2014)</p>
                        </div>
                    </li>

                    <li className='mt-4'>
                        <div className=''>
                        <p className='font-semibold'>Contractual Lecturer</p>
                        <p>Department of Physics, Jhargram Raj College, Vidyasagar University, Jhargram, West Bengal, 721507</p>
                        <p className='font-semibold'>(June 2007 - July 2008) </p>
                        </div>
                    </li>

                    </ul>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero
