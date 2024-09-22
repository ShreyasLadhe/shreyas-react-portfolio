import React from 'react'
import avatarImg from "../../assets/avatar_image.png"

const Home = () => {
  return <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
    <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl py-3 md:text-6xl font-bold flex leading-normal tracking-tighter'>Hello! I&apos;m Shreyas</h1>
        <p className='text-sm md:text-2xl tracking-tight'>
        AWS Certified and an AWS Cloud Intern with an avid interest in Cloud and DevOps technologies. Pursuing BTech in CSE and graduating in the year 2026. Proficient in AWS services with implementation of those skills at F13 Technologies and practical projects.
        </p>
        <button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact Me</button>
    </div>
    <div><img className='w-4/5' src={avatarImg} alt="Main Hero Image" /></div>
  </div>
}

export default Home