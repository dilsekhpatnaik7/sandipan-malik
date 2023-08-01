import React from 'react'

const About = () => {
  return (
    <section className=" mx-auto max-w-screen-xl pb-12 px-4 lg:flex md:px-8">
      <div className='text-left'>
        <div className="objective">
          <h1 className='font-bold text-2xl inline-block border-b mb-2'>Career Objective</h1>
          <p className=''>
          Seek a challenging and growth oriented position in the area of teaching/ scientific/technical development, where my skills can be implemented and to be part of a team that dynamically works towards growth of the organization and provides scope to explore myself with the latest technologies.
          </p>
        </div>

        

        <div className="experience mt-5">
          <h1 className='font-bold text-2xl inline-block border-b mb-2'>Experience</h1>
          <div className='px-4'>
            <ul className='list-disc'>
              <li className=''>
                <div className=''>
                  <p className='font-semibold'>Associate Professor</p>
                  <p>Department of Electronics Communication Engineering, National Institute of Science and Technology, Pallur Hills, Berhampur, Orissa, 761008 </p>
                  <p className='font-semibold'>(April 2019-till date)</p>
                </div>
              </li>

              <li className='mt-4'>
                <div className=''>
                  <p className='font-semibold'>Associate Professor</p>
                  <p>Department of Electronics Communication Engineering, National Institute of Science and Technology, Pallur Hills, Berhampur, Orissa, 761008 </p>
                  <p className='font-semibold'>(April 2019-till date)</p>
                </div>
              </li>

              <li className='mt-4'>
                <div className=''>
                  <p className='font-semibold'>Project Scholar</p>
                  <p>VLSI Engineering Lab, Department of E & ECE, Indian Institute of Technology Kharagpur, 721302 [Supervisor: Prof. C. K. Maiti, Department of E & ECE, Kharagpur] </p>
                  <p className='font-semibold'>(August 2008- June 2014)</p>
                </div>
              </li>

              <li className='mt-4'>
                <div className=''>
                  <p className='font-semibold'>Contractual Lecturer</p>
                  <p>Department of Physics, Jhargram Raj College, Vidyasagar University, Jhargram, West Bengal, 721507</p>
                  <p className='font-semibold'>(June 2007-July 2008) </p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        <div className="teaching-area mt-5">
          <h1 className='font-bold text-2xl inline-block border-b mb-2'>Teaching Area/ Subjects</h1>
          <div className="col px-4">
            <ul className='list-disc'>
              <li>Research Publication and Ethics (PhD Course Work): 2023</li>
              <li>Research Methodology & Intellectual Property Right (M.Tech): 2022</li>
              <li>VLSI Fabrication Technology (M.Tech.): 2016, 2017</li>
              <li>Classical Electrodynamics (M.Sc. Physics): 2018, 2019</li>
              <li>Semiconductor Devices (B.Tech): 2014-till date</li>
              <li>Electromagnetic Engineering (B.Tech): 2018-till date</li>
              <li>Signals & Systems (B.Tech): 2020-till date</li>
              <li>Solid State Devices (B.Tech): 2019</li>
              <li>Analog Systems and Applications (B.Sc. physics): 2023</li>
              <li>Electromagnetic Theory (B.Sc. Physics): 2021</li>
              <li>Optics (B.Sc. Physics): 2008</li>
            </ul>
          </div>
        </div>

        <div className="researcharea mt-5">
          <h1 className='font-bold text-2xl inline-block border-b mb-2'>Research Area</h1>
          <div className='grid grid-cols-2'>
            <div>
              <p><h1 className='font-semibold'>Specialization: </h1>
                <ul className='list-disc px-7'>
                  <li>Semiconductor Device Physics</li>
                  <li>Device Fabrication Technology</li>
                  <li>Nanotechnology & Microelectronics</li>
                </ul>
              </p>
            </div>

            <div>
              <p><h1 className='font-semibold'>Interest: </h1>
                <ul className='list-disc px-7'>
                  <li>Thin Film Physics and Technologies</li>
                  <li>Memristor devices </li>
                  <li>PAAO template for nanofabrication</li>
                  <li>PDMS base fabrication</li>
                  <li>Inorganic heterojunction solar cells</li>
                  <li>Protiotronics Devices</li>
                  <li>Biomedical Devices</li>
                </ul>
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default About
