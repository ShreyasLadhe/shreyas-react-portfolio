import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaHashnode, FaPhone } from "react-icons/fa6";

const Footer = () => {
  return <div id='Footer' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
    <div>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
        <h3 className='text-sm md:text-2xl font-normal'>Feel free to reach out!</h3>
    </div>
    <ul className='text-sm md:text-xl gap-2'>
        <li className='flex gap-1 items-center'><MdOutlineEmail size={20} />shreyasl9819@gmail.com</li>
        <li className='flex gap-1 items-center'><FaLinkedin size={20} /><a href="https://www.linkedin.com/in/shreyas-ladhe-6b3a73259" target="_blank">Shreyas Ladhe</a></li>
        <li className='flex gap-1 items-center'><FaHashnode size={20} /><a href="https://clouddevopsfornewbies.hashnode.dev/" target="_blank">CloudDevOps Unleashed</a></li>
        <li className='flex gap-1 items-center'><FaPhone size={20} />+91 9833740280</li>
    </ul>
  </div>
}

export default Footer