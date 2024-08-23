import React from 'react'
import heroremove from '../assets/heroremove.png';
import { AiOutlineGithub ,AiOutlineLinkedin ,  AiOutlineInstagram   } from "react-icons/ai";


function Hero() {

 const config={
  subTitle: 'Im a Frontend Developer ',
  social:{
    github:'https://github.com/Varshaa-Pandiyan/Varshaa-Pandiyan.git',
    linkedin:'https://www.linkedin.com/in/varshaa-pandiyan-a0778918b/',
    instagram:'https://www.instagram.com/'

  }
 }

  return (
    <section  className='flex flex-col md:flex-row px-5 py-32 justify-center'>
        <div className='md:w-1/2  flex flex-col'>
        <h1 className=' text-darkpink text-4xl font-bold py-5 font-hero-font '>Hi, <br/> I'm <span className='text-darkyellow py-3'> Varshaa Pandiyan</span> 
        <p className='text-2xl py-2 '>{config.subTitle}</p>
        </h1>
        <div className='flex py-3 '>
            <a href={config.social.github} target='_blank' className='pr-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200'><AiOutlineGithub  size={40} /></a>
            <a href={config.social.linkedin} target='_blank' className='pr-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200'><AiOutlineLinkedin size={40} /></a>
            <a href={config.social.instagram} target='_blank' className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200'><AiOutlineInstagram size={40} /></a>

        </div>
        </div>
        <img src={heroremove} className='md:w-1/3  '/>
       

    </section>

  )
}

export default Hero