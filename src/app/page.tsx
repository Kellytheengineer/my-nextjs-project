'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'

const ProjectCard = ({ project }: { project: { title: string, description: string, link: string } }) => {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    router.push(project.link)
  }

  return (
    <div 
      className="transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
      onClick={handleClick}
    >
      <Card className="overflow-hidden cursor-pointer">
        <CardContent className="p-6 bg-white bg-opacity-80 backdrop-blur-lg">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <Button variant="outline">View Project</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default function Home() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [projects] = useState([
    { title: "Robust API with PostgreSQL Integration", description: "Developed a secure API using Node.js/Express and PostgreSQL, handling credential management with environment variables and ensuring consistent JSON responses via the JSend specification.", link: "/projects#project1" },
    { title: "Recipe Search Project: API Integration", description: "Developed a Python application integrating the Recipe API. Users input an ingredient, and the program retrieves and displays matching recipes, demonstrating skills in API integration and data handling. Along with the ability to read and write information into a file.", link: "/projects#project2" },
    { title: "Online Clothing Store Database", description: "Created a comprehensive database for an online clothing store with five tables, utilising joins and views for specific results, and developed a function to apply discounts for orders over £150", link: "/projects#project3" },
  ])

  const handleNavigation = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(path)
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-[#d99ae3] to-[#491e6b]">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section
          id="about"
          className={`py-12 md:py-24 lg:py-32 xl:py-48 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white">
                  Kelly Princess Shungu
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Junior Full Stack Developer | Electronic Engineer MSc | Podcaster 
                </p>
              </div>
              <div className="space-x-4">
                <Button 
                  className="bg-white text-[#d99ae3] hover:bg-[#f0d4f5]"
                  onClick={handleNavigation('/about')}
                >
                  About Me
                </Button>
                <Button 
                  className="bg-white text-[#d99ae3] hover:bg-[#f0d4f5]"
                  onClick={handleNavigation('/projects')}
                >
                  View Projects
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-white">Skills</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {["SQL", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "React", "Next.js", "Bootstrap", "Node.js", "Express", "AWS Cloud"].map((skill) => (
              <div
                key={skill}
                className="bg-white bg-opacity-80 backdrop-blur-lg p-4 rounded-lg text-center transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-3"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-white">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button 
              className="bg-white text-[#d99ae3] hover:bg-[#f0d4f5]"
              onClick={handleNavigation('/projects')}
            >
              View All Projects
            </Button>
          </div>
        </section>

        {/* Podcast Section */}
        <section
          id="podcast"
          className={`py-12 md:py-24 lg:py-32 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-white">Women In STEM Podcast</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-white mb-6">
              Award-Winning Podcast 🌟<br />
              Amplifying the voices of women in STEM with powerful stories and expert insights ✨<br />
              Tune in every week for career tips and inspiring discussions 🔬<br />
              Don't miss out on the voices shaping the future of STEM!
            </p>
            <Button 
              className="bg-white text-[#d99ae3] hover:bg-[#f0d4f5]"
              onClick={handleNavigation('/podcast')}
            >
              Listen Now
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-white md:text-left">
              © 2025 Kelly Princess Shungu. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {[ 
              { Icon: Github, href: "https://github.com/Kellytheengineer", name: "GitHub" }, 
              { Icon: Linkedin, href: "https://www.linkedin.com/in/kelly-ann-shungu/", name: "LinkedIn" }, 
              { Icon: Mail, href: "mailto:kellyshungu@gmail.com", name: "Email" }
            ].map(({ Icon, href, name }, index) => (
              <div key={index} className="transition-all duration-300 ease-in-out hover:scale-120 hover:rotate-15">
                <a href={href} className="text-white hover:text-[#f0d4f5]" target="_blank" rel="noopener noreferrer">
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
};