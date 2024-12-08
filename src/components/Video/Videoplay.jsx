import React from 'react'

const Videoplay = () => {
  return (
    <div>  {/* Video Player */}
    <div className="mt-6">
      <div className="relative w-full aspect-video bg-black rounded-md overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/your-video-id"
          title="Course Video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
</div>
  )
}

export default Videoplay