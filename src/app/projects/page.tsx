'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Football Meetup Website for Parents",
    description: "Developed a full-stack application in one week as part of a collaborative group project. This website allows parents to organize and join football meetups for their children. It features user authentication, event creation and management, and real-time updates. The project showcases my ability to work in a team environment and deliver a functional product within a tight deadline.",
    techStack: "Next.js, React, GitHub CI/CD & Actions, Render, Prettier, ESLint",
    github: "https://github.com/Kellytheengineer/Football-meetup-website",
    demo: "https://final-project-final-destination.onrender.com/"
  },
  {
    title: "Robust API with PostgreSQL Integration",
    description: "Developed a secure API using Node.js/Express and PostgreSQL. This project demonstrates my proficiency in backend development and database management. The API includes features such as user authentication, data validation, and efficient query handling. It follows best practices for security and performance, making it suitable for production environments.",
    techStack: "Node.js/Express, PostgreSQL, JSend Specification, Git, Environment Variables (dotenv)",
    github: "https://github.com/Kellytheengineer/Recipe-Search-Project-API-Integration-"
  },
  {
    title: "Recipe Search Project: API Integration",
    description: "Developed a Python application integrating the Recipe API. This project showcases my ability to work with external APIs and process JSON data. Users can search for recipes based on ingredients, dietary restrictions, and meal types. The application provides detailed recipe information, including ingredients, nutritional facts, and cooking instructions.",
    techStack: "Python, PyCharm, JSON module, Edamam Recipe API (External integrations)",
    github: "https://github.com/Kellytheengineer/Recipe-Search-Project-API-Integration"
  },
  {
    title: "AI Interview Prep Helper",
    description: "AI-powered chatbot providing personalized job interview advice. This project demonstrates my skills in AI integration and frontend development. The chatbot uses natural language processing to understand user queries and provide tailored interview tips, common questions, and industry-specific advice. It's designed to help job seekers prepare more effectively for interviews.",
    techStack: "OpenAI API, GPT-4o mini, JavaScript, React, HTML, CSS, Node.js",
    github: "https://github.com/Kellytheengineer/AI-Interview-Prep-Helper"
  },
  {
    title: "Online Clothing Store Database",
    description: "Created a comprehensive database for an online clothing store. This project showcases my database design and SQL skills. The database includes tables for products, customers, orders, inventory, and more. It's optimized for performance and scalability, capable of handling large volumes of data and complex queries typical in e-commerce applications.",
    techStack: "MySQL, SQL, ERD",
    github: "https://github.com/Kellytheengineer/Online-clothing-store-database"
  },
  {
    title: "Psychological Approach to Biometric Feature Selection",
    description: "Developed a MATLAB-based facial recognition system using a psychological approach to biometric feature selection. This research project explores the intersection of psychology and computer vision. The system uses the Viola-Jones framework for face detection and implements custom algorithms for feature extraction based on psychological principles of face perception. The GUI allows for easy testing and visualization of results.",
    techStack: "MATLAB, C++ Algorithm, Viola-Jones Framework, GUI"
  }
];

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-6 bg-white bg-opacity-80 backdrop-blur-lg flex flex-col flex-grow">
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="text-gray-600 mb-4 flex-grow">
          {isExpanded ? project.description : `${project.description.slice(0, 100)}...`}
        </p>
        <Button 
          variant="link" 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="mb-4 p-0 h-auto font-normal"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </Button>
        <p className="text-sm text-gray-500 mb-4">Tech Stack: {project.techStack}</p>
        <div className="flex space-x-4">
          {project.github && (
            <Button asChild variant="outline">
              <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${project.title}`}>
                GitHub Repo
              </Link>
            </Button>
          )}
          {project.demo && (
            <Button asChild>
              <Link href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Live demo for ${project.title}`}>
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d99ae3] to-[#491e6b] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">My Projects</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.1, 0.5) }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}