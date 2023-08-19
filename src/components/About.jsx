import React from 'react'

const About = () => {
  return (
    <section className="lg:mx-20 mx-4 max-w-screen-xl text-center pb-12 px-4 lg:flex md:px-8 border-2 bg-gray-200 p-6 lg:pb-6 rounded-2xl mt-4 mb-8 drop-shadow-2xl ">
      <div className='mx-auto'>

      <div className=''>
        <div className=''>
          <div className=' p-6 pt-2 bg-slate-50 rounded-2xl drop-shadow-2xl'>
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
          </div>
        </div>


        <div className='bg-gray-50 p-6 pt-2 mt-4 rounded-2xl drop-shadow-2xl'>
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


      </div>

      </div>
    </section>
  )
}

export default About
