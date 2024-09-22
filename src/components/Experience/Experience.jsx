import React from "react";
import { FaAws, FaDocker, FaLinux, FaMicrosoft, FaPython, FaJenkins } from "react-icons/fa6";
import { SiMicrosoftazure, SiTerraform, SiGnubash } from "react-icons/si";
import { BsBuildingFillGear } from "react-icons/bs";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaAws color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMicrosoftazure color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTerraform color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaDocker color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaLinux color="#1572b6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPython color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiGnubash color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJenkins color="#E34F26" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <BsBuildingFillGear color="#E34F26" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                AWS Cloud Intern, F13 Technologies
              </h2>
              <p className="text-sm leading-tight font-thin">
                Aug 2024 - Present, Remote
              </p>
              <ul className="text-sm p-2">
                <li> - Gained 6 AWS Partner Accreditations in the domain of Cloud Technology</li>
                <li> - Working on Projects based on Cloud migration and Cloud Security.</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaMicrosoft color="#61DAFB" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                Technical Core Member, MLSA
              </h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2024 - Present
              </p>
              <ul className="text-sm p-2">
                <li> - Demonstrated my Management to ogranize workshops and other events.</li>
                <li> - Demonstrated my Technical Leadership to contribute my technical knowledge to the community.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
