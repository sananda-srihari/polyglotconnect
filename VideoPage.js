// VideoPage.js

import React from 'react';

const VideoPage = ({ videoUrl }) => {
  return (
    <div>
      <h2>Video Page</h2>
      <iframe
        title="Course Video"
        width="560"
        height="315"
        src={videoUrl}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoPage;
