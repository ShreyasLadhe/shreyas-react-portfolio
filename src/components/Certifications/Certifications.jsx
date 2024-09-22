import React from 'react';
import { FaAws } from "react-icons/fa6";
import { SiGooglecloud, SiNvidia } from "react-icons/si";
import aws_badge from "../../assets/aws_badge.png"
import aws_essentials from "../../assets/aws_essentials.png"
import aws_serverless from "../../assets/aws_serverless.png"

const Certifications = () => {
  return (
    <div id="Certifications" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Certifications</h1>
      <div className="mt-10 flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col items-start gap-2 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-6 min-h-[200px]">
            <FaAws color="#E34F26" size={50} />
            <span className="text-white">
              <h2 className="leading-tight text-lg font-bold">AWS Certified Cloud Practitioner</h2>
              <p className="text-sm leading-tight font-thin">Aug 2024 - Aug 2027</p>
              <ul className="text-sm p-2">
                <li>- Passed the exam with a score of 864/1000</li>
                <li>- Issued by Amazon Web Services. Validation number: cb48d1cec7bb4e2f9a0e29690f3bd1e3</li>
              </ul>
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-6 min-h-[200px]">
            <SiGooglecloud color="#61DAFB" size={50} />
            <span className="text-white">
              <h2 className="leading-tight text-lg font-bold">Google Cloud Computing Foundations: Cloud Computing Fundamentals</h2>
              <p className="text-sm leading-tight font-thin">Sept 2023</p>
              <ul className="text-sm p-2">
                <li>- Issued by Google Cloud Skill Boost</li>
                <li>- Familiarized with all the basic compute, network, database, and security services provided by GCP.</li>
                <li>- Credential ID: 5105313</li>
              </ul>
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-6 min-h-[200px]">
            <SiNvidia color="#47A248" size={50} />
            <span className="text-white">
              <h2 className="leading-tight text-lg font-bold">Fundamentals of Deep Learning - NVIDIA Deep Learning Institute</h2>
              <p className="text-sm leading-tight font-thin">Sept 2024</p>
              <ul className="text-sm p-2">
                <li>- Issued by NVIDIA Deep Learning Institute</li>
                <li>- Credential ID: 1tO0Ys3ITkGJkXM3sgBKrQ</li>
                <li>- Completed the assessment with model accuracy of 92%</li>
              </ul>
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-wrap gap-4">
          <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4 w-40 h-40 justify-center">
            <img src={aws_badge} alt="Badge" className="w-30 h-30 object-cover" />
            <span className="text-white text-center">AWS Partner: Technical Accredited</span>
          </div>
          <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4 w-40 h-40 justify-center">
            <img src={aws_badge} alt="Badge" className="w-30 h-30 object-cover" />
            <span className="text-white text-center">AWS Partner: Cloud Economics</span>
          </div>
          <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4 w-40 h-40 justify-center">
            <img src={aws_badge} alt="Badge" className="w-30 h-30 object-cover" />
            <span className="text-white text-center">AWS Partner: IoT on AWS</span>
          </div>
          <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4 w-40 h-40 justify-center">
            <img src={aws_badge} alt="Badge" className="w-30 h-30 object-cover" />
            <span className="text-white text-center">AWS Partner: Data Analytics on AWS</span>
          </div>
          <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4 w-40 h-40 justify-center">
            <img src={aws_badge} alt="Badge" className="w-30 h-30 object-cover" />
            <span className="text-white text-center">AWS Partner: Databases on AWS</span>
          </div>
          <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4 w-40 h-40 justify-center">
            <img src={aws_badge} alt="Badge" className="w-30 h-30 object-cover" />
            <span className="text-white text-center">AWS Partner: DevOps Navigate</span>
          </div>
          <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4 w-40 h-40 justify-center">
            <img src={aws_essentials} alt="Badge" className="w-30 h-30 object-cover" />
            <span className="text-white text-center">AWS Knowledge: Cloud Essentials</span>
          </div>
          <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4 w-40 h-40 justify-center">
            <img src={aws_serverless} alt="Badge" className="w-30 h-30 object-cover" />
            <span className="text-white text-center">AWS Knowledge: Serverless</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
