import React, { useState, useEffect, useRef } from "react";

export const Player = () => {
  const videoRef = useRef();
  const [isPlay, setIsplay] = useState(false);

  useEffect(() => {
    console.log(videoRef);
    if (isPlay) {
      videoRef.current.play();
    }else{
      videoRef.current.pause();
    }
  }, [isPlay]);

  return (
    <div>
      <video ref={videoRef}>
        <source
          src="http://techslides.com/demos/sample-videos/small.mp4"
          type="video/mp4"
        />
      </video>
      <button onClick={() => setIsplay(!isPlay)}>
        {isPlay ? <span>&#9208;</span> : <span>&#9654;</span>}
      </button>
    </div>
  );
};
