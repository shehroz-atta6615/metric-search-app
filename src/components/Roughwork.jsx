import React from 'react'

export default function Roughwork() {
  return (
    <>
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
        
            
            <g className="image-wrapper">
              <image 
                href={image2} 
                x="0" 
                y="0" 
                width="700" 
                height="750" 
                clipPath="url(#clip1)" 
                preserveAspectRatio="xMidYMid slice" 
              />
            </g>
        
           
            <rect 
              x="0" 
              y="620" 
              width="700" 
              height="130" 
              fill="url(#blackShade1)" 
              clipPath="url(#clip1)" 
            />
        
            
            <g className="bottom-wrapper">
             
              <image 
                href={image4} 
                x="85" 
                y="615" 
                width="330" 
                height="90" 
                className="bottom-img" 
                preserveAspectRatio="xMidYMid meet" 
              />
        
             
              <foreignObject 
                x="85" 
                y="710" 
                width="330" 
                height="100" 
                className="para-box" 
                style={{ overflow: "visible" }}
              >
                <div xmlns="http://www.w3.org/1999/xhtml" className="text-lines">
                  <p>
                    Utilizing our expertise to provide recruiment solutions to <br />
                    some of the world's most cutting-edge companies in <br />
                    MedTech and Life Science.
                  </p>
                </div>
              </foreignObject>
                 <foreignObject
            x="85"
            y="825" 
            width="180"
            height="60"
            className="button-box"
            style={{ overflow: "visible" }}
          >
            <div xmlns="http://www.w3.org/1999/xhtml">
        
              <svg
                width="150"
                height="55"
                viewBox="0 0 180 55"
                style={{ cursor: "pointer" }}
                xmlns="http://www.w3.org/2000/svg"
                className="learn-button"
              >
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
                  d="
                    M0 10
                    L0 35
                    L20 55
                    H180
                    V0
                    H0
                    Z
                  "
                  fill="url(#animatedGradient)"
                />
        
               
                <text
                  x="28"
                  y="31"
                  fontSize="14"
                  fill="white"
                  fontWeight="bold"
                  fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
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
        
            {/* Outline stroke */}
            <path className='svg1Border'
              d="M 30 30 H 500 L 650 200 V 720 H 30 Z" 
              fill="none" 
              stroke="#06402B" 
              strokeWidth="2" 
            />
          </svg>


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
        
            
            <g className="image-wrapper">
              <image 
                href={image2} 
                x="0" 
                y="0" 
                width="700" 
                height="750" 
                clipPath="url(#clip1)" 
                preserveAspectRatio="xMidYMid slice" 
              />
            </g>
        
           
            <rect 
              x="0" 
              y="620" 
              width="700" 
              height="130" 
              fill="url(#blackShade1)" 
              clipPath="url(#clip1)" 
            />
        
            
            <g className="bottom-wrapper">
             
              <image 
                href={image4} 
                x="85" 
                y="615" 
                width="330" 
                height="90" 
                className="bottom-img" 
                preserveAspectRatio="xMidYMid meet" 
              />
        
             
              <foreignObject 
                x="85" 
                y="710" 
                width="330" 
                height="70" 
                className="para-box" 
                style={{ overflow: "visible" }}
              >
                <div xmlns="http://www.w3.org/1999/xhtml" className="text-lines">
                  <p>
                    Utilizing our expertise to provide recruiment solutions to <br />
                    some of the world's most cutting-edge companies in <br />
                    MedTech and Life Science.
                  </p>
                </div>
              </foreignObject>
                 <foreignObject
            x="85"
            y="780" 
            width="180"
            height="90"
            className="button-box"
            style={{ overflow: "visible" }}
          >
            <div xmlns="http://www.w3.org/1999/xhtml">
        
              <svg
                width="150"
                height="55"
                viewBox="0 0 210 55"
                style={{ cursor: "pointer" }}
                xmlns="http://www.w3.org/2000/svg"
                className="learn-button"
              >
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
                  d="
                    M0 10
                    L0 35
                    L20 55
                    H180
                    V0
                    H0
                    Z
                  "
                  fill="url(#animatedGradient)"
                />
        
               
                <text
                  x="28"
                  y="31"
                  fontSize="14"
                  fill="white"
                  fontWeight="bold"
                  fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
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
        
            {/* Outline stroke */}
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
      <clipPath id="clip2">
        <path d="M 650 30 H 150 L 30 200 V 720 H 650 Z" />
      </clipPath>

      <linearGradient id="blackShade2" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="black" stopOpacity="0.45" />
        <stop offset="100%" stopColor="black" stopOpacity="0" />
      </linearGradient>

       <filter id="aquaGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="-5" dy="-5" stdDeviation="10" floodColor="#4eff00" />
      </filter>

      <linearGradient id="animatedGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#00FFAA">
        <animate attributeName="stop-color" values="#00FFAA;#0077FF;#00FFAA" dur="3s" repeatCount="indefinite" />
      </stop>
      <stop offset="100%" stopColor="#0077FF">
        <animate attributeName="stop-color" values="#0077FF;#00FFAA;#0077FF" dur="3s" repeatCount="indefinite" />
      </stop>
    </linearGradient>
    </defs>

    {/* MAIN IMAGE */}
    <g className="image-wrapper2">
      <image 
        href={image3} 
        x="0" 
        y="0" 
        width="700" 
        height="750" 
        clipPath="url(#clip2)" 
        preserveAspectRatio="xMidYMid slice" 
      />
    </g>

    {/* BLACK SHADE */}
    <rect 
      x="0" 
      y="620" 
      width="700" 
      height="130" 
      fill="url(#blackShade2)" 
      clipPath="url(#clip2)" 
    />

    {/* BOTTOM IMAGE + PARAGRAPH */}
    <g  className="bottom-wrapper">
      <image 
        href={image5} 
        x="85" 
        y="615" 
        width="330" 
        height="90" 
        className="bottom-img" 
        preserveAspectRatio="xMidYMid meet" 
      />

      <foreignObject 
        x="85" 
        y="710" 
        width="330" 
        height="100" 
        className="para-box" 
        style={{ overflow: "visible" }}
      >
        <div xmlns="http://www.w3.org/1999/xhtml" className="text-lines">
          <p>
            Optimizing our global reach to build world leading teams <br />
            and provide solutions to the global shortage of <br />
            infrastructure and engineering talent.
          </p>
        </div>
      </foreignObject>
      <g className="buttonBox" transform="translate(85, 775)">
      <svg
        width="150"
        height="55"
        viewBox="0 0 210 55"
        // style={{ overflow: "visible" }}
        // xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
        <linearGradient id="animatedGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00FFAA">
            <animate attributeName="stop-color" values="#00FFAA;#0077FF;#00FFAA" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#0077FF">
            <animate attributeName="stop-color" values="#0077FF;#00FFAA;#0077FF" dur="3s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
        {/* Button Shape */}
        <path
          d="M0 10 L0 35 L20 55 H180 V0 H0 Z"
          fill="url(#animatedGradient2)"
        />

        {/* Text */}
        <text
          x="28"
          y="31"
          fontSize="14"
          fill="white"
          fontWeight="bold"
          fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        >
          LEARN MORE
        </text>

        {/* Arrow */}
        <path
          d="M150 27 L165 27 L160 22 M165 27 L160 32"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </g>
    </g>

    <path className='svg2Border'
      d="M 650 30 H 150 L 30 200 V 720 H 650 Z" 
      fill="none" 
      stroke="#06402B" 
      strokeWidth="2" 
    />
    </svg>

  </div>

  <svg width="700" height="750" className="svg2">
  
    <defs>
      <clipPath id="clip2">
        <path d="M 650 30 H 150 L 30 200 V 720 H 650 Z" />
      </clipPath>
  
      <linearGradient id="blackShade2" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="black" stopOpacity="0.45" />
        <stop offset="100%" stopColor="black" stopOpacity="0" />
      </linearGradient>
  
      {/* <linearGradient id="animatedGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00FFAA">
          <animate attributeName="stop-color" values="#00FFAA;#0077FF;#00FFAA" dur="3s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#0077FF">
          <animate attributeName="stop-color" values="#0077FF;#00FFAA;#0077FF" dur="3s" repeatCount="indefinite" />
        </stop>
      </linearGradient> */}
      <filter id="aquaGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="-5" dy="-5" stdDeviation="10" floodColor="aqua" />
      </filter>
    </defs>
  
    <g clipPath="url(#clip2)">
  
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
  
      <rect x="0" y="620" width="700" height="130" fill="url(#blackShade2)" />
  
      <g className="bottom-wrapper" style={{ overflow: 'visible' }}>
  
        <image 
          href={image5} 
          x="85" 
          y="615" 
          width="330" 
          height="90"
          className="bottom-img"
        />
        
  
        <foreignObject x="85" y="710" width="480" height="130" className="para-box">
          <div xmlns="http://www.w3.org/1999/xhtml" className="text-lines">
            <p>
              Optimizing our global reach to build world leading teams <br />
              and provide solutions to the global shortage of <br />
              infrastructure and engineering talent.
            </p>
          </div>
        </foreignObject>
  
        <foreignObject x="85" y="840" width="180" height="90">
          <div xmlns="http://www.w3.org/1999/xhtml">
            <svg width="150" height="55" viewBox="0 0 210 55" className="learn-button">
              {/* <path d="M0 10 L0 35 L20 55 H180 V0 H0 Z" fill="url(#animatedGradient2)" />
              <text x="28" y="31" fontSize="14" fill="white" fontWeight="bold" fontFamily="Segoe UI">LEARN MORE</text>
              <path d="M150 27 L165 27 L160 22 M165 27 L160 32" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /> */}
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
            <path d="M0 10 L0 35 L20 55 H180 V0 H0 Z" fill="url(#animatedGradient2)" />
            <text x="28" y="31" fontSize="14" fill="white" fontWeight="bold" fontFamily="Segoe UI">LEARN MORE</text>
            <path d="M150 27 L165 27 L160 22 M165 27 L160 32" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </foreignObject>
  
      </g>
  
    </g>
  
    <path className='svg2Border' d="M 650 30 H 150 L 30 200 V 720 H 650 Z" fill="none" stroke="#06402B" strokeWidth="2" />
  </svg>

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
        <foreignObject x="85" y="840" width="180" height="90">
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




  </>
  )
}
