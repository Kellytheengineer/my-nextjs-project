'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Me</h1>
        <Card className="mb-8 bg-white">
          <CardHeader>
            <CardTitle className="text-3xl">My Journey</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>
              Hello! I&apos;m Kelly, a Junior Full Stack Developer specializing in SQL, JavaScript, HTML, CSS, and Python. I&apos;m actively developing my skills and building hands-on experience with modern frameworks, which you can explore in my GitHub portfolio. With a background in Cloud Computing (AWS, VMware Cloud, Azure) and Data Center Virtualization from my previous role as a Digital Solutions Engineer, I bring a unique blend of technical and business expertise to my work. I also hold a Master&apos;s in Engineering Technology and Business Management from the University of Leeds.
            </p>
            <p>
              In addition to coding, I am the host of the award-winning &quot;Women In STEM Podcast&quot;, a platform dedicated to amplifying the voices of inspiring women in tech, from CEOs to scientists. The podcast features expert insights, career tips, and motivational stories to empower others, making it a valuable resource for anyone passionate about diversity and inclusion in STEM.
            </p>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">My Skills</h3>
              <ul className="list-disc list-inside grid grid-cols-2 gap-2">
                <li>HTML, CSS, JavaScript</li>
                <li>AWS Cloud, VMware Cloud</li>
                <li>Python, SQL</li>
                <li>React, Next.js</li>
                <li>Node.js, Express</li>
                <li>Git, GitHub</li>
              </ul>
            </div>
            
            <p>
              I&apos;m passionate about creating efficient and scalable applications, with a keen interest in cloud technologies. My diverse experience allows me to collaborate effectively across teams and communicate technical concepts clearly. I&apos;m eager to apply my growing full stack skills and cloud knowledge to help a company innovate and grow.
            </p>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">Education</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-bold">University of Leeds</h4>
                  <p className="italic">MSc (Eng) in Engineering Technology and Business Management (2019-2020)</p>
                  <p>Relevant modules: Managing Global Logistics, Smart Grid, Renewable Energy, Analytics</p>
                </li>
                <li>
                  <h4 className="font-bold">University of Kent</h4>
                  <p className="italic">BEng in Electronic Communication Engineering with Honors (IET accredited) (2015-2019)</p>
                  <p>Relevant modules: Machine Learning, Mathematics, Programming, Digital Technologies</p>
                </li>
                <li>
                  <h4 className="font-bold">VMware</h4>
                  <p className="italic">
                    <a
                      href="https://www.credly.com/badges/a9cea98c-f939-4074-95a9-43bed6a27d64/public_url"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      VMware Certified Technical Associate - Data Center Virtualization (2022)
                    </a>
                  </p>
                  <p>Relevant modules: Virtual Networking, Virtual Machines, vSAN, vSphere, Vcenter</p>
                </li>
                <li>
                  <h4 className="font-bold">School of Code</h4>
                  <p className="italic">Full Stack Developer Bootcamp (2024)</p>
                </li>
                <li>
                  <h4 className="font-bold">Code First Girls</h4>
                  <p className="italic">Introduction to Python & Apps with GCHQ (2024)</p>
                  <p className="italic">Introduction to Data & SQL with Deloitte (2024)</p>
                </li>
              </ul>
            </div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AboutPage;
