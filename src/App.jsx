import React, { useState, useEffect } from 'react';
import './BackgroundVideo.css';
import Typewriter from 'typewriter-effect';

const BackgroundVideo = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // Use a setTimeout to delay showing the buttons until after the typewriter effect finishes
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 9000); // Adjust this value to match the duration of the typewriter animation

    return () => clearTimeout(timer);
  }, []);

  const handleYesClick = () => {
    
  };

  const handleNoClick = () => {
    // Handle no click
  };

  return (
    <div className="background-video-container">
      <video autoPlay loop muted className="background-video">
        <source src="bg_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-container">
        <h1>
          <Typewriter
            options={{
              strings: ['Hi,There!!!', 'Thank You Very Much!!'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        {showButtons && (
          <div className="button-container">
            <button onClick={handleYesClick}>Yes😍</button>
            <button onClick={handleNoClick}>No🥺</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BackgroundVideo;
