"use client"

import React from 'react'
import YouTube, {YouTubeProps} from 'react-youtube';

type VideoProps = {
  videoId: string
}

const Video = ({videoId}: VideoProps) => {

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} onReady = {onPlayerReady} />
    </div>
  )
}

export default Video