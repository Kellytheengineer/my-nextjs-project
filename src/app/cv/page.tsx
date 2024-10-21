'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"

const CVPage: React.FC = (): JSX.Element => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)

  const toggleFullscreen = (): void => {
    setIsFullscreen((prev) => !prev)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">My CV</h1>
        <div className="flex justify-center mb-4">
          <Button 
            onClick={toggleFullscreen}
            className="bg-blue-600 text-white hover:bg-blue-700 mr-4"
          >
            {isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
          </Button>
        </div>
        <div className={`bg-white rounded-lg overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50' : 'h-[calc(100vh-200px)]'}`}>
          <iframe
            src="/portfolio.cv.docx.pdf"
            className="w-full h-full"
            title="CV"
            frameBorder="0" // Adding frameBorder for better styling control
          />
        </div>
      </div>
    </div>
  )
}

export default CVPage;
