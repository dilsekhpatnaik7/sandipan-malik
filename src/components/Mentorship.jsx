import React from 'react'
import StudentCard from './StudentCard'
import photo from '../assets/students'

const Mentorship = () => {
  
    const students = [
      {
        photo: photo.blank,
        name: 'Rohit Raj Padhy',
        position: 'MS',
        branch: 'ECE/2023',
        university: 'NTHU Taiwan - #QS 168',
        email: ''
      },
      {
        photo: photo.blank,
        name: 'S Sovan Kumar',
        position: 'MS',
        branch: 'ECE/2023',
        university: 'NTHU Taiwan - #QS 168',
        email: ''
      },
      {
        photo: photo.blank,
        name: 'Harshit Sourav',
        position: 'MS-PhD',
        branch: 'ECE/2023',
        university: 'IISc Bengaluru - #QS 225',
        email: ''
      },
      {
        photo: photo.blank,
        name: 'Soumya R Dash',
        position: 'MS',
        branch: 'ECE/2022',
        university: 'UPen, USA - #QS 13',
        email: ''
      },
      {
        photo: photo.blank,
        name: 'Debasish Panda',
        position: 'MS',
        branch: 'ECE/2022',
        university: 'IIT Jodhpur',
        email: 'pdebasish624@gmail.com'
      },
      {
        photo: photo.blank,
        name: 'Abinash Patnaik',
        position: 'MS',
        branch: 'ECE/2021',
        university: 'NCTU Taiwan - #QS 240',
        email: 'abinashpattnaik1998@gmail.com'
      },
      {
        photo: photo.shitikant,
        name: 'S Mohanty',
        position: 'MS',
        branch: 'ECE/2021',
        university: 'NTU Taiwan - #QS 66',
        email: 'msheetikanta@gmail.com'
      },
      {
        photo: photo.blank,
        name: 'Bimalendu Swain',
        position: 'MS-PhD',
        branch: 'EEE/2021',
        university: 'IISc Bengaluru - #QS 255',
        email: 'swainbimalendu064@gmail.com'
      },
      {
        photo: photo.darsana,
        name: 'Darsana Deo',
        position: 'MS',
        branch: 'ECE/2021',
        university: 'NTU Taiwan - #QS 66',
        email: ''
      },
      {
        photo: photo.shivendra,
        name: 'Shivendra P Singh',
        position: 'MS',
        branch: 'ECE/2021',
        university: 'NTHU Taiwan - #QS 168',
        email: 'singhshivendra177@gmail.com'
      },
      {
        photo: photo.bishal,
        name: 'Bishal Kr Nayak',
        position: 'MS',
        branch: 'ECE/2021',
        university: 'NTHU Taiwan - #QS 168',
        email: 'nahakbishal@gmail.com'
      },
      {
        photo: photo.lucky,
        name: 'Lucky Kr Pradhan',
        position: 'MS',
        branch: 'ECE/2021',
        university: 'NTUST Taiwan - #QS 267',
        email: 'kumarlucky8000@gmail.com'
      },
      {
        photo: photo.swosti,
        name: 'Swosti Choudhury',
        position: 'MS',
        branch: 'EEE/2021',
        university: 'CSU Northfidge',
        email: 'choudhuryswosti1999@gmail.com'
      },
      {
        photo: photo.ajit,
        name: 'Ajit Dash',
        position: 'PhD',
        branch: 'ECE/2020',
        university: 'UNSW Australia - #QS 44',
        email: 'ajitdash58@gmail.com '
      },
      {
        photo: photo.abhijeet,
        name: 'Abhijeet Choudhury',
        position: 'MS',
        branch: 'ECE/2019',
        university: 'NTHU Taiwan - #QS 168',
        email: 'abhijeetchoudhury101@gmail.com'
      },
      {
        photo: photo.aditya,
        name: 'Aditya Sharma',
        position: 'MS',
        branch: 'ECE/2019',
        university: 'NTHU Taiwan - #QS 168',
        email: 'saditya56399@gmail.com'
      },
      {
        photo: photo.blank,
        name: 'Parkarsh Kumar',
        position: 'MS',
        branch: 'ECE/2019',
        university: 'NTHU Taiwan - #QS 168',
        email: 'parkarsh@gapp.nthu.edu.tw'
      },
      {
        photo: photo.blank,
        name: 'C Binesh Kumar',
        position: 'MS',
        branch: 'ECE/2019',
        university: 'MUAS Germany - #QS 1696',
        email: 'chinnari@hm.edu'
      },
      {
        photo: photo.blank,
        name: 'Arbind K Mahto',
        position: 'MS',
        branch: 'EEE/2018',
        university: 'NCTU Taiwan - #QS 240',
        email: 'arbind23.08kumar@gmail.com'
      },
      {
        photo: photo.anupam,
        name: 'Anupam R Tripathy',
        position: 'MS',
        branch: 'EEE/2018',
        university: 'NTHU Taiwan - #QS 168',
        email: 'anupam@gapp.nthu.edu.tw'
      },
      {
        photo: photo.blank,
        name: 'Kabita Mahato',
        position: 'MS',
        branch: 'EEE/2018',
        university: 'NCTU Taiwan-#QS 240',
        email: ''
      },
      {
        photo: photo.sachin,
        name: 'S Sachin Kumar',
        position: 'MS',
        branch: 'ECE/2017',
        university: 'NTHU Taiwan - #QS 168',
        email: 'sachink1995@gapp.nthu.edu.tw'
      },
      {
        photo: photo.blank,
        name: 'Saswati Panda',
        position: 'MS',
        branch: 'ECE/2017',
        university: 'CSU Northfidge',
        email: 'saswati.panda.582@my.csun.edu'
      },
      {
        photo: photo.pancham,
        name: 'P P Pancham',
        position: 'MS',
        branch: 'ECE/2017',
        university: 'NCTU Taiwan - #QS 240',
        email: 'pancham.eic06g@nctu.edu.tw'
      },
      {
        photo: photo.subhaprakash,
        name: 'Subha P Mallick',
        position: 'MS',
        branch: 'ECE/2017',
        university: 'NCTU Taiwan - #QS 240',
        email: 'subhaprakash118mallick@gmail.com'
      }
    ]


  return (
    <div className='text-center bg-gray-200 p-6 pt-4 mt-4 rounded-2xl drop-shadow-2xl mx-6 lg:mx-10 mb-8 font-serif'>
        <h1 className='mt-2 mb-7 lg:text-xl '>The following students were directly mentored to pursue their higher education in Indian and foreign universities during their undergraduate studies at NIST Berhampur. Majority of the students achieved their MS/PhD position in the mentioned universities with partial/full scholarship.</h1>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
        {
          students.map(student => {
            return (<StudentCard photo={student.photo} name={student.name} position={student.position} branch={student.branch} university={student.university} email={student.email} />)
        })
        }
      </div>
    </div>
  )
}

export default Mentorship
