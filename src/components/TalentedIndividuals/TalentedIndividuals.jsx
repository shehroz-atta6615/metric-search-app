import React from 'react'
import '../../components/TalentedIndividuals/TalentedIndividuals.css';
import MetricSearchLondon from '../../images/Metric-Search-London.webp'
import ManSmiling from '../../images/man-smiling.webp'
import MetricSearchBAIRD from '../../images/Metric-Search-BAIRD.webp'
import ThreePeople from '../../images/three-people.webp'
import{ useState } from "react";

export default function TalentedIndividuals() {
    const [hover, setHover] = useState(false);
  return (
   <div className='talented-individuals-portion'>
    <div className='talented-individuals'>
    <div className='talented-individuals-heading'>
        <h2>
            <span className="big">We thrive with</span> <br />
            <span className="small">talented individuals.</span>
        </h2>
    </div>

    <div className='Metric-Search-London'>

    <div className='Metric-Search-London-image1'>
        <svg width="300" height="180" viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg"  >
            <defs>
                <clipPath id="buttonClip">
                    <path
                        d="
                        M0 33
                        L0 130
                        L60 180
                        H300
                        V0
                        H0
                        Z
                        "
                    />
                </clipPath>
            </defs>

            <image
                href={MetricSearchLondon}
                width="300"
                height="180"
                clipPath="url(#buttonClip)"
                preserveAspectRatio="xMidYMid slice"
            />
        </svg>
        
    </div>   

    <div className='man-smiling'>
        <svg width="530" height="550" viewBox="0 0 530 550" >
            <defs>
                <clipPath id="clipShape">
                    <path d="M 37.86 22 H 416.43 L 507.14 146.67 V 528 H 37.86 Z" />
                </clipPath>

                <linearGradient id="blackShade2" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="black" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="black" stopOpacity="0" />
                </linearGradient>
            </defs>

            <g clipPath="url(#clipShape)">
                <image 
                    href={ManSmiling}
                    x="0"
                    y="0"
                    width="530"
                    height="550"
                    preserveAspectRatio="xMidYMid slice"
                />
                <rect x="0" y="460" width="530" height="90" fill="url(#blackShade2)" />
            </g>

            <path
                d="M 37.86 22 H 416.43 L 507.14 146.67 V 528 H 37.86 Z"
                fill="none"
                stroke="none"
            />
        </svg>
        
    </div>

    </div>
</div>

    <div className='join-us-portion'>
        <div className='clapping-portion'>
           <svg width="700" height="550" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <clipPath id="clip10">
                        <path d="M 650 40 H 150 L 30 147 V 528 H 650 Z" />
                        </clipPath>
                    </defs>
                    
                        <image
                        href={MetricSearchBAIRD} 
                        x="0"
                        y="0"
                        width="700"
                        height="550"
                        preserveAspectRatio="xMidYMid slice"
                        clipPath="url(#clip10)"
                        />
                    
            </svg>

        </div>

        <div className='join-us'>
             <svg
                width="350"
                height="45"
                viewBox="0 0 330 45"
                xmlns="http://www.w3.org/2000/svg"
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                >
                <defs>
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

                {/* Base button (white) */}
                <g transform="scale(-1,1) translate(-330,0)">
                    <path
                    d="M0 20 L0 30 L20 45 H330 V0 H0 Z"
                    fill="#FFFFFF"
                    />
                    {/* Overlay gradient */}
                    <path
                    d="M0 20 L0 30 L20 45 H330 V0 H0 Z"
                    fill="url(#animatedGradient)"
                    style={{
                        transition: "opacity 0.5s ease",
                        opacity: hover ? 1 : 0,
                    }}
                    />
                </g>

                {/* Text centered */}
                <text
                    x="165"
                    y="25" // vertically adjust for new height
                    fontSize="14"
                    fill={hover ? "#FFFFFF" : "#000000"}
                    fontWeight="bold"
                    fontFamily="Segoe UI"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    style={{ transition: "fill 0.5s ease" }}
                >
                    JOIN US
                </text>
             </svg>
        </div>

        <div className='three-people-post'>
               <svg width="300" height="580" viewBox="0 0 300 580" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <clipPath id="buttonClip6">
            <path
                d="
                M0 -67
                L0 210
                L90 290
                H580
                V0
                H0
                Z
                "
            />
        </clipPath>
    </defs>

    <image
        href={ThreePeople}
        width="300"
        height="350"
        clipPath="url(#buttonClip6)"
        preserveAspectRatio="xMidYMid slice"
    />
        </svg>

        </div>

         <div className='text-portion'>
            <p className='text-portion1'>Metric is home to world-leading, global recruiters, and you <br /> could work alongside them.</p>
            <br />
            <p className='text-portion2'>Our passionate team is what makes Metric’s culture stand <br /> apart from the rest, and makes us a certified Great Place to <br /> Work©. We’re always on the lookout for fresh talent to join <br /> us across our four offices at every level.</p>

        </div>

    </div>

    


    


</div>

  )
}
