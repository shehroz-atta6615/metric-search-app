import React from 'react'
import '../../components/Global-reach/GlobalReach.css'
import NewYork from '../../images/new-york.webp'
import FortLauderale from '../../images/fort-lauderdale.webp'
import Austin from '../../images/austin.webp'

export default function GlobalReach() {
  return (
   <div className='GlobalReach'>
        <div className='GlobalReach-heading'>
            <h2>
            <span className="big">Our Global</span> <br />
            <span className="small">Reach</span>
            </h2>
        </div>
        <div className='images-animation'>
            
           <svg width="370" height="450" className="NewYork ">
                <defs>
                    <clipPath id="clipCustom">
                    <path 
                        d="
                        M 15 18
                        H 265
                        L 359 118
                        V 430
                        H 15
                        Z
                        "
                    />
                    </clipPath>
                </defs>

  {/* CONTENT INSIDE SHAPE */}
  <g clipPath="url(#clipCustom)">
    <image 
      href={NewYork}
      x="0"
      y="0"
      width="370"
      height="450"
      preserveAspectRatio="xMidYMid slice"
    />
    {/* TOP LEFT TEXT "01" */}
    <text
      x="40"   /* 15px path start + 10px inset */
      y="75"   /* 18px path start + ~10px vertical padding */
      fontSize="35"
      fontWeight="bold"
      fill="white"
      fontFamily="Segoe UI"
    >
      01
    </text>

    {/* BOTTOM LEFT TEXT "NewYork" */}
    <text
      x="40"
      y="400"  /* 430px path bottom - ~5px inset */
      fontSize="35"
      fontWeight="bold"
      fill="white"
      fontFamily="Segoe UI"
    >
      NewYork
    </text>
  </g>

  {/* BORDER */}
  <path
    d="
      M 15 18
      H 265
      L 359 118
      V 430
      H 15
      Z
    "
    fill="none"
    stroke="none"
    strokeWidth="2"
  />
            </svg>

            <svg width="370" height="450" className="Fort-Lauderdale ">
                <defs>
                    <clipPath id="clipCustom">
                    <path 
                        d="
                        M 15 18
                        H 265
                        L 359 118
                        V 430
                        H 15
                        Z
                        "
                    />
                    </clipPath>
                </defs>

  {/* CONTENT INSIDE SHAPE */}
  <g clipPath="url(#clipCustom)">
    <image 
      href={FortLauderale}
      x="0"
      y="0"
      width="370"
      height="450"
      preserveAspectRatio="xMidYMid slice"
    />
    {/* TOP LEFT TEXT "01" */}
    <text
      x="40"   /* 15px path start + 10px inset */
      y="75"   /* 18px path start + ~10px vertical padding */
      fontSize="35"
      fontWeight="bold"
      fill="white"
      fontFamily="Segoe UI"
    >
      02
    </text>

    {/* BOTTOM LEFT TEXT "NewYork" */}
    <text
      x="40"
      y="400"  /* 430px path bottom - ~5px inset */
      fontSize="35"
      fontWeight="bold"
      fill="white"
      fontFamily="Segoe UI"
    >
      Fort Lauderale
    </text>
  </g>

  {/* BORDER */}
  <path
    d="
      M 15 18
      H 265
      L 359 118
      V 430
      H 15
      Z
    "
    fill="none"
    stroke="none"
    strokeWidth="2"
  />
            </svg>

            <svg width="370" height="450" className="Fort-Lauderdale ">
                <defs>
                    <clipPath id="clipCustom">
                    <path 
                        d="
                        M 15 18
                        H 265
                        L 359 118
                        V 430
                        H 15
                        Z
                        "
                    />
                    </clipPath>
                </defs>

  {/* CONTENT INSIDE SHAPE */}
  <g clipPath="url(#clipCustom)">
    <image 
      href={Austin}
      x="0"
      y="0"
      width="370"
      height="450"
      preserveAspectRatio="xMidYMid slice"
    />
    {/* TOP LEFT TEXT "01" */}
    <text
      x="40"   /* 15px path start + 10px inset */
      y="75"   /* 18px path start + ~10px vertical padding */
      fontSize="35"
      fontWeight="bold"
      fill="white"
      fontFamily="Segoe UI"
    >
      03
    </text>

    {/* BOTTOM LEFT TEXT "NewYork" */}
    <text
      x="40"
      y="400"  /* 430px path bottom - ~5px inset */
      fontSize="35"
      fontWeight="bold"
      fill="white"
      fontFamily="Segoe UI"
    >
      Austin
    </text>
  </g>

  {/* BORDER */}
  <path
    d="
      M 15 18
      H 265
      L 359 118
      V 430
      H 15
      Z
    "
    fill="none"
    stroke="none"
    strokeWidth="2"
  />
            </svg>

           

        </div>

    </div>
  )
}
