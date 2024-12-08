import React from 'react'
import VideoSidebar from './VideoSidebar'
import MainContent from './MainContent'
import Videoplay from './Videoplay'
import VideoTab from './VideoTab'
// import TablinkSection from './TablinkSection'



const Videotag = () => {
  return (
 <>
 <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <VideoSidebar />
      <div className="flex-1 p-6">
        <MainContent />
        <Videoplay />
        <VideoTab />
       
        {/* <TablinkSection/> */}
        
        
      </div>
    </div>
 
 </>
  )
}

export default Videotag