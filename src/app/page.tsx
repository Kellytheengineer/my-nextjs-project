'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const router = useRouter();

  const handleClick = (): void => {
    router.push(project.link);
  };

  return (
    <div
      className="transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      onClick={handleClick}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-6 bg-white/80 backdrop-blur-lg rounded-md">
          <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
          <p className="text-gray-600 text-base lg:text-lg mb-4">
            {project.description}
          </p>
          <Button variant="outline" className="text-base lg:text-lg text-blue-600 border-blue-600 hover:bg-blue-50">
            View Project
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

const Home: React.FC = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const projects: Project[] = [
    {
      title: 'API with PostgreSQL Integration',
      description: 'Developed a secure API using Node.js/Express and PostgreSQL, handling credential management with environment variables and ensuring consistent JSON responses via the JSend specification.',
      link: '/projects#project1',
    },
    {
      title: 'Recipe Search Project',
      description: 'Developed a Python application integrating the Recipe API. Users input an ingredient, and the program retrieves and displays matching recipes, demonstrating skills in API integration and data handling.',
      link: '/projects#project2',
    },
    {
      title: 'Clothing Store Database',
      description: 'Created a comprehensive database for an online clothing store with five tables, utilizing joins and views for specific results, and developed a function to apply discounts for orders over £150.',
      link: '/projects#project3',
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNavigation = (path: string): void => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        {/* About Section */}
        <section
          id="about"
          className={`py-8 md:py-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="w-48 h-48 mb-4 relative overflow-hidden rounded-full">
              <Image src="/images/Headshot-Photoroom.png" alt="Kelly" width={232} height={232} className="object-cover" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800">Kelly Princess Shungu</h1>
            <p className="text-lg md:text-xl text-gray-600">
              Junior Full Stack Developer | Electronic Engineer MSc | Podcaster
            </p>
            <div className="space-x-2 md:space-x-4">
              {['/about', '/cv', '/projects'].map((path, index) => (
                <Button
                  key={index}
                  className="bg-blue-600 text-white hover:bg-blue-700 text-sm md:text-base"
                  onClick={() => handleNavigation(path)}
                >
                  {path === '/cv' ? 'CV' : path.slice(1).replace(/^./, str => str.toUpperCase())}
                </Button>
              ))}
            </div>
          </div>
        </section>

          {/* Skills Section */}
          <section id="skills" className="py-8 md:py-16 mt-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 md:mb-8">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["SQL", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "React", "Next.js", "Bootstrap", "Node.js", "Express", "AWS Cloud"].map(skill => (
                <div key={skill} className="bg-white p-3 md:p-4 rounded-lg text-center text-sm md:text-base text-gray-700 shadow-md">
                  {skill}
                </div>
              ))}
            </div>
          </section>


        {/* Projects Section */}
        <section id="projects" className="py-8 md:py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 md:mb-8">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Podcast Section */}
        <section id="podcast" className="py-8 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="w-48 h-48 mb-4 relative overflow-hidden rounded-lg">
                <Image
                  src="/images/Women-In-STEM-Podcast-logo.png"
                  alt="Podcast"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 md:mb-8">
                My Podcast
              </h2>
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-gray-600 mb-6 text-xl">
                  Award-Winning Podcast, Founded & Hosted by me 🎙 <br />
                  Amplifying the voices of women in STEM with expert insights ✨<br />
                  Weekly episode on career tips and inspiring discussions 🔬<br />
                  Don&apos;t miss out on the voices shaping the future of STEM!
                </p>
                <Button
                  className="bg-blue-600 text-white hover:bg-blue-700 text-lg"
                  onClick={() => handleNavigation('/podcast')}
                >
                  Listen Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;



