"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// ProjectCard Interface
interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  link?: string;
}

// Card Hover Animations
const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" },
};

// ProjectCard Component
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, skills, link }) => {
  return (
    <motion.div 
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true }}
      className="relative bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl transition-all duration-300"
    >
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
      
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          View Project <ExternalLink size={16} className="ml-1" />
        </a>
      )}
    </motion.div>
  );
};

// Projects Data
const projects = [
  {
    title: "Rumor Detection using NLP",
    description: "Developed an advanced NLP model to detect and categorize rumors, differentiating between genuine information and misleading content.",
    skills: ["NLP", "Machine Learning"],
    link: "https://github.com/azshaikh0786/RumourDetection"
  },
  {
    title: "AWS CI/CD Pipeline Deployment",
    description: "Automated web app deployment with AWS CodePipeline, CodeBuild, and CodeDeploy for efficient software delivery.",
    skills: ["AWS", "CI/CD", "CodePipeline", "RDS"],
    link: "https://github.com/azshaikh0786/CICD"
  },
  {
    title: "AWS Cloud Container Deployment",
    description: "Built and deployed containerized applications using AWS ECR, EKS, and Fargate for scalable infrastructure.",
    skills: ["AWS", "ECR", "EKS", "Fargate"]
  }
];

// Projects Component
const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Projects
          </h2>
          <div className="w-20 h-1 mx-auto rounded bg-blue-600 dark:bg-blue-400"></div>
        </motion.div>

        {/* Animated Project Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;