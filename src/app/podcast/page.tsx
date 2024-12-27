'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"; // Ensure these components accept className props
import Link from "next/link";

interface Episode {
  title: string;
  link: string;
}

const episodes: Episode[] = [
  { title: "Navigating AI, Analytics, And The Future Of Tech", link: "https://rss.com/podcasts/womeninstem/1629293/" },
  { title: "Frontier Chronicles: Voyages from Space to the Antarctic Expanse", link: "https://rss.com/podcasts/womeninstem/1328905/" },
  { title: "Show Your Worth with Shelmina Babai Abji", link: "https://rss.com/podcasts/womeninstem/1416370/" },
  { title: "Tips and Techniques for Early-Career Scientists", link: "https://rss.com/podcasts/womeninstem/1328905/" }
];

const PodcastPage: React.FC = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Women In STEM Podcast</h1>
        <Card className="mb-8 shadow-md">
          <CardContent className="p-6 bg-white rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Women In STEM Podcast</h2>
            <p className="mb-4">
              Welcome to the Women In STEM Podcast, a passion project dedicated to amplifying the voices of women in 
              Science, Technology, Engineering, and Mathematics (STEM). Through inspiring discussions with a diverse 
              lineup of speakers from around the globe, we explore topics ranging from career advancement to the 
              challenges of balancing motherhood with a STEM career. As I pursue a full-stack role in tech, this 
              podcast enhances my skills in web development, project management, and community engagement while 
              promoting diversity in the industry.
            </p>
            <h3 className="text-xl font-bold mb-2">Recommended Episodes</h3>
            <ul className="list-disc list-inside mb-4">
              {episodes.map((episode, index) => (
                <li key={index} className="mb-2">
                  <Link href={episode.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    {episode.title}
                  </Link>
                </li>
              ))}
            </ul>
            <section id="listen" className="py-8 md:py-16 mt-6"> {/* Adjusted mt-12 to mt-6 */}
              <h3 className="text-xl font-bold mb-2">Listen on:</h3> {/* Same classes as "Recommended Episodes" */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button asChild className="w-full">
                  <Link
                    href="https://rss.com/podcasts/womeninstem/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-red-500 text-white py-2 px-4 rounded-lg shadow-md"
                  >
                    Listen on RSS
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link
                    href="https://open.spotify.com/show/4KwRgwcYybTjrvKf0ykRuP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-green-500 text-white py-2 px-4 rounded-lg shadow-md"
                  >
                    Listen on Spotify
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link
                    href="https://music.amazon.com/podcasts/29351512-ca78-4380-9cb6-ee7a422f11b3/women-in-stem-podcast"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md"
                  >
                    Listen on Amazon Music
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link
                    href="https://podcasts.apple.com/gb/podcast/welcome-to-the-women-in-stem-podcast/id1562509950?i=1000516589931"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-grey-400 text-white py-2 px-4 rounded-lg shadow-md"
                  >
                    Listen on Apple Podcasts
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link
                    href="https://podcastindex.org/podcast/3706972"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-purple-700 text-white py-2 px-4 rounded-lg shadow-md"
                  >
                    Listen on Podcast Index
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link
                    href="https://www.linkedin.com/company/women-in-stem-podcast/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md"
                  >
                    Follow on LinkedIn
                  </Link>
                </Button>
              </div>
            </section>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default PodcastPage;





