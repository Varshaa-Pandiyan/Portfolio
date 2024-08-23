import React from 'react';
import cara from '../assets/cara-ecommerce.jpg';
import build from '../assets/resume-build.png';
import app from '../assets/mobileapp.jpg'

export default function Project() {


const config={
  projects:[
  {
    image:cara,
    description:'A E-commerce Website. Built with Hmtl,Css,Javascript',
    link:'https://github.com/Varshaa-Pandiyan/Varshaa-Pandiyan.git',

  },

  {
    image:build,
    description:'A Resume builder Website. Built with Hmtl,Css,Javascript,React',
    link:'https://github.com/Varshaa-Pandiyan/Varshaa-Pandiyan.git',

  },

  {
    image:app,
    description:'A Mobile App. Built with React Native,and use stylesheet to style',
    link:'https://github.com/Varshaa-Pandiyan/Varshaa-Pandiyan.git',

  }
]
}


  return (


    <section id='project'  className='pt-16'>
        <div>
          <h1 className='text-4xl text-darkyellow font-bold flex justify-center '> Projects</h1>
            <p className='text-brown py-10 px-9 flex justify-center '>These are some of my Projects I have built these with Html,Css,Javascript,React,React Native.Check the Out!! </p>
        </div>
        <div className='w-full px-10 py-2  ' > 
            <div className='flex justify-center flex-col px-10 py-2 md:flex-row gap-6  '>
              {config.projects.map((project)=>(
                 <div className='relative cursor-pointer'>
                 <img className='h-[250px] w-[200px] '  src={project.image} />
                 <div className='project'>
                   <p className='py-22 px-3'>{project.description}</p>
                   <div className='py-10 '>
                    <a href={project.link} target='_blank' className='button' >View Project</a>
                   </div>

                 </div>

                 </div>

              ))}
            
    

            
            </div>

        </div>
    </section>
  )
}
