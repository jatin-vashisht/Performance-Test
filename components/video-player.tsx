"use client"

import { useState, useRef } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
        <video
          ref={videoRef}
          className="w-full h-auto"
          poster="/placeholder.svg?height=600&width=1000&text=Video+Poster"
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src="/placeholder-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <Button
              size="lg"
              onClick={togglePlay}
              className="w-20 h-20 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-lg"
              aria-label="Play Video"
            >
              <Play className="w-8 h-8 ml-1" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
