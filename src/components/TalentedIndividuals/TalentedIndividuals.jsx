import React from 'react'
import '../../components/TalentedIndividuals/TalentedIndividuals.css';
import MetricSearchLondon from '../../images/Metric-Search-London.webp'
import ManSmiling from '../../images/man-smiling.webp'

export default function TalentedIndividuals() {
  return (
   <div className='talented-individuals'>
    <div className='talented-individuals-heading'>
        <h2>
            <span className="big">We thrive with</span> <br />
            <span className="small">talented individuals.</span>
        </h2>
    </div>

    <div className='Metric-Search-London'>

        <svg
            width="300"
            height="180"
            viewBox="0 0 300 180"
            xmlns="http://www.w3.org/2000/svg"
            className='Metric-Search-London-image1'
        >
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

    </div>   {/* ✔️ Correct closing */}

    <div>
        <svg width="530" height="550" viewBox="0 0 530 550" className='man-smiling'>
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

  )
}
