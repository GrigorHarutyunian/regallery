import React, { useState, useEffect } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import "./VideoSlider.css";

interface VideoSliderProps {
  videos: string[];
  height: string;
  width: string;
  onSlideChange?: (index: number) => void;
}

const VideoSlider: React.FC<VideoSliderProps> = ({
  videos,
  height,
  width,
  onSlideChange,
}) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentVideoIndex(index);
    onSlideChange?.(index);
  };

  useEffect(() => {
    const slideDurations = [22000, 14000];

    const timeout = setTimeout(() => {
      const nextIndex = (currentVideoIndex + 1) % videos.length;
      handleSlideChange(nextIndex);
    }, slideDurations[currentVideoIndex]);

    return () => clearTimeout(timeout);
  }, [currentVideoIndex, videos.length]);

  return (
    <div className="video-slider">
      <div className="video-container">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`video-slide ${
              index === currentVideoIndex ? "active" : ""
            }`}
          >
            <LazyLoadComponent>
              <video
                height={height}
                width={width}
                src={video}
                autoPlay
                loop
                muted
                playsInline
              />
            </LazyLoadComponent>
          </div>
        ))}
      </div>
      <div className="slider-dots">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentVideoIndex ? "active" : ""}`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;
