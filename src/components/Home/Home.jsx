import React from 'react'
import avatarImg from "../../assets/avatar_image.png"
import TextChange from "../TextChange.jsx"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaHashnode } from "react-icons/fa6";

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl py-3 md:text-6xl font-bold flex leading-normal tracking-tighter'>
          <TextChange />
        </h1>
        <p className='text-sm md:text-2xl tracking-tight'>
          AWS Certified and an AWS Cloud Intern with an avid interest in Cloud and DevOps technologies. Pursuing BTech in CSE and graduating in the year 2026. Proficient in AWS services with implementation of those skills at F13 Technologies and practical projects.
        </p>

        <div className='flex mt-5 md:mt-10 space-x-5'>
          <a href="https://github.com/ShreyasLadhe" target="_blank" rel="noopener noreferrer">
            <div className='w-12 h-12 md:w-16 md:h-16 bg-[#465697] rounded-full flex items-center justify-center hover:opacity-85 hover:scale-105 duration-300'>
              <FaGithub className='text-white w-6 h-6 md:w-8 md:h-8' />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/shreyas-ladhe-6b3a73259" target="_blank" rel="noopener noreferrer">
            <div className='w-12 h-12 md:w-16 md:h-16 bg-[#465697] rounded-full flex items-center justify-center hover:opacity-85 hover:scale-105 duration-300'>
              <FaLinkedin className='text-white w-6 h-6 md:w-8 md:h-8' />
            </div>
          </a>
          <a href="https://clouddevopsfornewbies.hashnode.dev/" target="_blank" rel="noopener noreferrer">
            <div className='w-12 h-12 md:w-16 md:h-16 bg-[#465697] rounded-full flex items-center justify-center hover:opacity-85 hover:scale-105 duration-300'>
              <FaHashnode className='text-white w-6 h-6 md:w-8 md:h-8' />
            </div>
          </a>
        </div>
      </div>
      
      <div>
        <img className='w-4/5' src={avatarImg} alt="Main Hero Image" />
      </div>
    </div>
  )
}

export default Home
