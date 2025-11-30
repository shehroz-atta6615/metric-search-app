import React, { useRef } from "react";
import "../../components/HeroSection/HeroSection.css";

export default function HeroSection() {
  const videoRef = useRef(null);

  const handleEnter = () => {
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    const v = videoRef.current;
    if (v) v.pause();
  };

  return (
    <div className="container2">
      <div className="hero-inner">
        {/* line under navbar */}
        <div className="header-text">
          WORLD LEADING TALENT SOLUTIONS
        </div>

        {/* main row: left big heading + metric box, right description */}
        <div className="hero-main">
          <div className="hero-left">
            <div className="BoldText">
              <h1 className="BoldText1">High Achieving</h1>
              <h1 className="BoldText2">Global Partnerships</h1>
            </div>

            <div
              className="video-section"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <video
                ref={videoRef}
                className="video"
                src="https://www.metric-search.com/wp-content/uploads/2024/02/6773-4bf1-82a4-b885cdef6ce5.mp4"
                muted
                loop
                playsInline
              />

              <svg width="250" height="150" className="outline">
                <path
                  d="M 10 10 H 235 V 110 L 210 140 H 10 Z"
                  fill="transparent"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinejoin="round"
                  className="svgOutline svgOutline-desktop"
                />
                <path
    className="svgOutline svgOutline-small"
    d="M 10 10 H 215 V 100 L 190 130 H 10 Z"
    fill="transparent"
    stroke="white"
    strokeWidth="1"
    strokeLinejoin="round"
  />

                <text
                  x="20"
                  y="125"
                  fontSize="14"
                  fill="white"
                  fontWeight="600"
                >
                  METRIC EXEC
                </text>

                <rect
                  className="dot-square bottom"
                  x="200"
                  y="120"
                  width="4"
                  height="4"
                />

                <path
                  className="arrow"
                  d="M 198 122 
                     L 212 122 
                     L 207 116 
                     M 212 122 
                     L 207 128"
                  stroke="white"
                  strokeWidth="2.2"
                  fill="none"
                  opacity="0"
                />
              </svg>
            </div>
          </div>

          <div className="description">
            <p className="paragraph1">
              Metric is a New York founded, high growth global recruitment
              business partnering with some of the world’s most cutting edge
              and innovative businesses to build world-class teams.
            </p>
            <br />
            <p className="paragraph2">
              Having secured multi-million-pound investment from one of
              Europe’s most active investors BGF, we’re proud to offer Metric
              Exec, a disruptive, client-friendly C-Suite Exec and Board
              talent solution service across all our specialisms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
