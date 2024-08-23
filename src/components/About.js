import React from 'react';
import about from '../assets/about.png'


export default function About() {
  const config={

    line1:'Hi, I’m Varshaa, a dedicated and creative Frontend Developer with a passion for building user-friendly and visually appealing web and mobile applications. My expertise lies in HTML, CSS, JavaScript, React.js, Redux, React Native, and Tailwind CSS, which I use to bring ideas to life with clean, efficient code.',

    line2:'I am constantly exploring new technologies and design trends to enhance my skills and stay up-to-date in the fast-evolving world of frontend development.',
     
    line3:'My goal is to continue creating impactful digital experiences that not only meet user needs but also exceed expectations.I’m excited about the opportunity to collaborate on innovative projects and contribute to meaningful solutions. Let’s create something amazing together!'
  }




  return (
   <section id='about' className='flex flex-col md:flex-row'>
     <div className='md:w-1/2 py-5'> 
        <img className=' px-10' src={about}/>
        </div>
        <div className=' md:w-1/2 flex justify-center px-10'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-darkyellow font-bold '>About Me</h1>
            <p className='py-3 text-brown font-semibold '>{config.line1}</p>
            <p className='py-3 text-brown font-semibold '>{config.line2}</p>
             <p className='py-3 text-brown font-semibold '>{config.line3} </p>
            </div>
        </div>
    
   </section>
    
  )
}
