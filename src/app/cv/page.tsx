'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"


export default function CVPage() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d99ae3] to-[#491e6b] py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">My CV</h1>
        <div className="flex justify-center mb-4">
          <Button 
            onClick={toggleFullscreen}
            className="bg-white text-[#d99ae3] hover:bg-[#f0d4f5] mr-4"
          >
            {isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
          </Button>
        </div>
        <div className={`bg-white rounded-lg overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50' : 'h-[calc(100vh-200px)]'}`}>
          <iframe
            src="/portfolio.cv.docx.pdf"
            className="w-full h-full"
            title="CV"
          />
        </div>
      </div>
    </div>
  )
}