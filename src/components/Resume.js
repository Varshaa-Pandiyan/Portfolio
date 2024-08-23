import React from 'react';
import resume from '../assets/resume.jpg'


export default function Resume() {

const config={
  link:'https://pdflink.to/0866ac17/'
}

  return (
   <section id='resume' className='flex flex-col md:flex-row'>
     {/* <div className='md:w-1/2 py-5'> 
        <img className=' px-10' src={resume}/>
        </div> */}
    <div className=' md:w-1/2 flex justify-center px-10'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-darkyellow font-bold flex justify-center '>Resume</h1>
            <p className='py-8 px-0 text-brown '>You can view my Resume</p>
                 <a href={config.link} target='_blank' className='button'>Download</a> 
            
         </div>
    </div>

    <div className='md:w-1/2 py-5'> 
        <img className=' px-10' src={resume}/>
        </div>
    
   </section>
    
  )
}
