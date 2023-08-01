import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/sandipan__1_-removebg-preview.png'

const Navbar = () => {

  const [state, setState] = useState(false)

  return (
      <nav className="px-4 bg-white w-full md:border-0">
          <div className="items-center px-4 mx-auto md:flex bg-textc">
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="http://nist.edu">
                        <img
                            src={logo}
                            width={70} 
                            height={50}
                            alt="Float UI logo"
                        />
                    </a>
                  <div className="md:hidden">
                      <button className="text-gray-900 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 transition-all ease-out duration-500 ${ state ? 'block' : 'hidden'}`}>
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0 transition-all ease-out duration-500">
                        <li className="text-gray-900 hover:text-indigo-600" onClick={() => setState(!state)}><NavLink to='/'>Home</NavLink></li>
                        <li className="text-gray-900 hover:text-indigo-600" onClick={() => setState(!state)}><NavLink to='/about'>About</NavLink></li>
                        <li className="text-gray-900 hover:text-indigo-600" onClick={() => setState(!state)}><NavLink to='/education'>Education</NavLink></li>
                        <li className="text-gray-900 hover:text-indigo-600" onClick={() => setState(!state)}><NavLink to='/research'>Research</NavLink></li>
                        <li>
                            
                        </li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}

export default Navbar