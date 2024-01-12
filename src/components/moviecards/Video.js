import React from 'react'
import ReactPlayer from 'react-player';


const Video = ({video}) => {
    // console.log(video);
    return (
        <div className='min-w-[600px] min-h-[450px] flex flex-col justify-center items-center text-white rounded-md'>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${video.key}`}
                controls
                width="100%"
                height="100%"
            />

            {/* <p className='text-[18px] font-semibold'>{video?.name}</p> */}
        </div>
      )
}

export default Video