import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import Project1 from "../../assets/p1.png";
import Project2 from "../../assets/p2.png";
import Project3 from "../../assets/p3.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap justify-between gap-5">
        <ProjectCard
          img={Project1}
          title="Transforming Infrared Images to Visible Light Using AWS and cGANs"
          main="Building a scalable architecture on AWS to automate the conversion process using cGANs."
          WebLink="https://clouddevopsfornewbies.hashnode.dev/transforming-infrared-images-to-visible-light-using-aws-and-cgans"
        />

        <ProjectCard
          img={Project2}
          title="Automating CI/CD Deployment of a React Application"
          main="Automating the CI/CD deployment of a React application using AWS EC2, Docker, DockerHub, and GitHub Actions."
          WebLink="https://clouddevopsfornewbies.hashnode.dev/automating-cicd-deployment-of-a-react-application-with-aws-ec2-docker-dockerhub-and-github-actions"
        />

        <ProjectCard
          img={Project3}
          title="Building a production ready VPC with ALB and NAT Gateway"
          main="Building a Production-Ready VPC with Auto Scaling, Application Load Balancer, and NAT Gateway."
          WebLink="https://clouddevopsfornewbies.hashnode.dev/my-journey-to-building-a-production-ready-vpc-with-auto-scaling-application-load-balancer-and-nat-gateway"
        />
      </div>
    </div>
  );
};

export default Projects;
