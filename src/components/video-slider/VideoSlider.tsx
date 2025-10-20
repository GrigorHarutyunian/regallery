import React, { useState, useEffect } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import "./VideoSlider.css";

interface VideoSliderProps {
  videos: string[];
  height: string;
  width: string;
  onSlideChange?: (index: number) => void;
  viewMoreLinks: string[];
}

const VideoSlider: React.FC<VideoSliderProps> = ({
  videos,
  height,
  width,
  onSlideChange,
  viewMoreLinks,
}) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentVideoIndex(index);
    onSlideChange?.(index);
  };

  useEffect(() => {
    const slideDurations = [22000, 14000, 17000];

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
      <div className="view-more-button">
        <motion.p>
          <a
            href={viewMoreLinks[currentVideoIndex]}
            target="_blank"
            title="View more"
            aria-label="View more"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              height="40"
              viewBox="0 0 24 24"
              width="40"
            >
              <g fill="#292d32">
                <path
                  fill="#2540cc"
                  d="m12 22.75c-5.93 0-10.75-4.82-10.75-10.75s4.82-10.75 10.75-10.75 10.75 4.82 10.75 10.75-4.82 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z"
                />
                <path
                  fill="#2540cc"
                  d="m10.7397 16.2802c-.19 0-.38-.07-.53-.22-.29001-.29-.29001-.77 0-1.06l3-3-3-3.00004c-.29001-.29-.29001-.77 0-1.06.29-.29.77-.29 1.06 0l3.53 3.53004c.29.29.29.77 0 1.06l-3.53 3.53c-.15.15-.34.22-.53.22z"
                />
              </g>
            </svg>
          </a>
        </motion.p>
      </div>
    </div>
  );
};

export default VideoSlider;
