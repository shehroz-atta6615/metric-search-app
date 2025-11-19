import React from 'react'
import '../../components/About-us/AboutUs.css';

export default function AboutUs() {
  return (
    <div className='About'>
        <div className='About-heading'>
            <h2>World leading talent solutions <br /> with global reach</h2>
        </div>
        <div className='About-Text'>
              <p className='About-Text1'>Founded in New York in 2019, we’re a high performance, hyper-growth <br />business partnering with global businesses to provide world leading talent <br /> solutions.</p>
              <br />
              <p className='About-Text2'>We’re unapologetically results driven, and our track record speaks for itself.<br /> Our team of experts offer a precise and efficient service focused on <br /> building high performing teams and long-term partnerships with clients.</p>
            
           <div className='about-btn'>
  <svg
  width="120"
  height="55"
  viewBox="0 0 180 55"
  className="learnmore-btn"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    {/* Animated Gradient */}
    <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#00FFAA">
        <animate
          attributeName="stop-color"
          values="#00FFAA;#0077FF;#00FFAA"
          dur="3s"
          repeatCount="indefinite"
        />
      </stop>
      <stop offset="100%" stopColor="#0077FF">
        <animate
          attributeName="stop-color"
          values="#0077FF;#00FFAA;#0077FF"
          dur="3s"
          repeatCount="indefinite"
        />
      </stop>
    </linearGradient>
  </defs>

  {/* Background Shape */}
  <path
    className="btn-bg"
    d="
      M0 10
      L0 35
      L20 55
      H180
      V0
      H0
      Z
    "
    fill="white"
  />

  {/* Text */}
  <text
    x="30"
    y="33"
    fontSize="16"
    fontWeight="bold"
    fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    className="btn-text"
  >
    LEARN MORE
  </text>

  {/* Small Square */}
  <rect className="square" x="150" y="23" width="6" height="6" fill="black" />

  {/* Arrow */}
  <path
    className="arrow"
    d="M150 27 L165 27 L160 22 M165 27 L160 32"
    stroke="black"
    strokeWidth="2.5"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

</div>




        </div>
    </div>
  )
}
