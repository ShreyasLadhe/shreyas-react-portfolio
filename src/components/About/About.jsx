import React from 'react'
import AboutImg from "../../assets/about_image.png"
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div className='text-white bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div className='w-full text-center mb-6'>
        <h2 className='text-4xl md:text-6xl font-bold'>About</h2>
      </div>
      <div className='md:grid md:grid-cols-2 md:gap-8'>
        <div className='flex justify-center items-center'>
          <img className='md:h-80' src={AboutImg} alt="About Image" />
        </div>
        <div className='w-full'>
          <ul>
            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className="mt-1" />
              <span className='w-full'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Certified Cloud Practitioner</h1>
                <p className='text-sm mt-3 md:text-md leading-tight text-justify'>
                  Cleared the exam in Aug 2024 with a score of <strong>864/1000</strong>. I am equipped with the knowledge and the aptitude to architect cloud-native solutions on AWS.
                </p>
              </span>
            </div>

            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className="mt-1" />
              <span className='w-full'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>MLSA Technical Core Member</h1>
                <p className='text-sm mt-3 md:text-md leading-relaxed text-justify'>
                  As a Technical Core Member of the Microsoft Learn Student Ambassador (MLSA) IIITV Chapter, I am responsible for driving the growth and engagement of our tech community at IIITV.
                </p>
              </span>
            </div>

            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className="mt-1" />
              <span className='w-full'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Actively Upgrading</h1>
                <p className='text-sm mt-3 md:text-md leading-relaxed text-justify'>
                  Actively studying and practicing for <strong>AZ-900</strong> Azure fundamentals to step into Azure cloud as well as AWS Solutions Architect Associate <strong>SAA-C03</strong> to upgrade my exptertise in AWS cloud.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
