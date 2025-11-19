import React from 'react'
import '../../components/Specialism/Specialism.css';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/bio-logo.svg';
import image5 from '../../images/geo-logo.svg';

export default function Specialism() {

    
  return (
    <div className='Specialism'>

        <div className='heading'>
        <h2 className='heading1'>Our</h2>
        <h2  className='heading2'>Specialisms</h2>

    </div>
       

        <div className="svgContainer">

  {/* ================= SVG 1 ================= */}
          <svg width="700" height="750" className="svg1">
            <defs>
              <clipPath id="clip1">
                <path d="M 30 30 H 500 L 650 200 V 720 H 30 Z" />
              </clipPath>

              <linearGradient id="blackShade1" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="black" stopOpacity="0.45" />
                <stop offset="100%" stopColor="black" stopOpacity="0" />
              </linearGradient>

              <filter id="aquaGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="-5" dy="-5" stdDeviation="10" floodColor="aqua" />
              </filter>
            </defs>

            {/* EVERYTHING INSIDE THE CLIPPATH */}
            <g clipPath="url(#clip1)">

              {/* Main Image */}
              <g className="image-wrapper">
                <image 
                  href={image2} 
                  x="0" 
                  y="0" 
                  width="700" 
                  height="750" 
                  preserveAspectRatio="xMidYMid slice" 
                />
              </g>

              {/* Black Shade */}
              <rect 
                x="0" 
                y="620" 
                width="700" 
                height="130" 
                fill="url(#blackShade1)" 
              />

              {/* Bottom Content */}
              <g className="bottom-wrapper">

                {/* Bottom Image */}
                <image 
                  href={image4} 
                  x="85" 
                  y="615" 
                  width="330" 
                  height="90"
                  className="bottom-img"
                />

                {/* FIXED PARAGRAPH */}
                <foreignObject 
                  x="85" 
                  y="710" 
                  width="480" 
                  height="130"
                  className="para-box"
                >
                  <div xmlns="http://www.w3.org/1999/xhtml" className="text-lines">
                    <p>
                      Utilizing our expertise to provide recruitment solutions to <br />
                      some of the world's most cutting-edge companies in <br />
                      MedTech and Life Science.
                    </p>
                  </div>
                </foreignObject>

                {/* FIXED BUTTON SPACING */}
                <foreignObject
                  x="85"
                  y="800"
                  width="180"
                  height="90"
                >
                  <div xmlns="http://www.w3.org/1999/xhtml">
                    <svg width="150" height="55" viewBox="0 0 210 55" className="learn-button">

                      <defs>
                        <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#00FFAA">
                            <animate attributeName="stop-color" values="#00FFAA;#0077FF;#00FFAA" dur="3s" repeatCount="indefinite" />
                          </stop>
                          <stop offset="100%" stopColor="#0077FF">
                            <animate attributeName="stop-color" values="#0077FF;#00FFAA;#0077FF" dur="3s" repeatCount="indefinite" />
                          </stop>
                        </linearGradient>
                      </defs>

                      <path
                        d="M0 10 L0 35 L20 55 H180 V0 H0 Z"
                        fill="url(#animatedGradient)"
                      />

                      <text
                        x="28"
                        y="31"
                        fontSize="14"
                        fill="white"
                        fontWeight="bold"
                        fontFamily="Segoe UI"
                      >
                        LEARN MORE
                      </text>

                      <path
                        className="arrow"
                        d="M150 27 L165 27 L160 22 M165 27 L160 32"
                        stroke="white"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                    </svg>
                  </div>
                </foreignObject>

              </g>

            </g>

            {/* BORDER */}
            <path className='svg1Border'
              d="M 30 30 H 500 L 650 200 V 720 H 30 Z" 
              fill="none" 
              stroke="#06402B" 
              strokeWidth="2" 
            />
          </svg>




          {/* ================= SVG 2 (mirror) ================= */}
        <svg width="700" height="750" className="svg2">
            <defs>
              {/* Clip Path */}
              <clipPath id="clip2">
                <path d="M 650 30 H 150 L 30 200 V 720 H 650 Z" />
              </clipPath>
          
              {/* Black Shade */}
              <linearGradient id="blackShade2" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="black" stopOpacity="0.45" />
                <stop offset="100%" stopColor="black" stopOpacity="0" />
              </linearGradient>

              <filter id="aquaGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="-5" dy="-5" stdDeviation="10" floodColor="aqua" />
              </filter>
            </defs>
          
              {/* Animated Gradient for Button */}
              {/* <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00FFAA">
                  <animate attributeName="stop-color" values="#00FFAA;#0077FF;#00FFAA" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#0077FF">
                  <animate attributeName="stop-color" values="#0077FF;#00FFAA;#0077FF" dur="3s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
          */}
              {/* Optional Glow */}
              
          
            {/* Clipped Content */}
            <g clipPath="url(#clip2)">
              {/* Main Image */}
              <g className="image-wrapper2">
                <image
                  href={image3}
                  x="0"
                  y="0"
                  width="700"
                  height="750"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
          
              {/* Black Shade */}
              <rect x="0" y="620" width="700" height="130" fill="url(#blackShade2)" />
          
              {/* Bottom Wrapper */}
              <g className="bottom-wrapper" >
                {/* Bottom Image */}
                <image
                  href={image5}
                  x="85"
                  y="615"
                  width="330"
                  height="90"
                  className="bottom-img"
                />
          
                {/* Paragraph */}
                <foreignObject x="85" y="710" width="480" height="130" className="para-box">
                  <div xmlns="http://www.w3.org/1999/xhtml" className="text-lines">
                    <p>
                      Optimizing our global reach to build world leading teams <br />
                      and provide solutions to the global shortage of <br />
                      infrastructure and engineering talent.
                    </p>
                  </div>
                </foreignObject>
          
                {/* Button */}
                <foreignObject x="85" y="800" width="180" height="90">
                  <div xmlns="http://www.w3.org/1999/xhtml">
                    <svg width="150" height="55" viewBox="0 0 210 55" className="learn-button">
                      <defs>
                        <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#00FFAA">
                            <animate attributeName="stop-color" values="#00FFAA;#0077FF;#00FFAA" dur="3s" repeatCount="indefinite" />
                          </stop>
                          <stop offset="100%" stopColor="#0077FF">
                            <animate attributeName="stop-color" values="#0077FF;#00FFAA;#0077FF" dur="3s" repeatCount="indefinite" />
                          </stop>
                        </linearGradient>
                      </defs>
                      
                      <path
                        d="M0 10 L0 35 L20 55 H180 V0 H0 Z"
                        fill="url(#animatedGradient)"
                      />
                      <text
                        x="28"
                        y="31"
                        fontSize="14"
                        fill="white"
                        fontWeight="bold"
                        fontFamily="Segoe UI"
                      >
                        LEARN MORE
                      </text>
                      <path
                        d="M150 27 L165 27 L160 22 M165 27 L160 32"
                        stroke="white"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </foreignObject>
              </g>
            </g>
          
            {/* Border */}
            <path
              className="svg2Border"
              d="M 650 30 H 150 L 30 200 V 720 H 650 Z"
              fill="none"
              stroke="#06402B"
              strokeWidth="2"
            />
          </svg>

</div>



</div>
  )
}



