import React from 'react'
import '../../components/Footer/Footer.css';
import metriclogo from  '../../images/metric-logo.png'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-section1'>
            <div className='first-part'>
                <div className='arrow-svg-section'>
                    <div className='arrow-svg'>
                        <svg
                                        width="40"
                                        height="60"
                                        viewBox="0 0 40 60"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className='arrow-svg1'
                                        >
                                        <defs>
                                        
                                            <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stop-color="#00FFAA">
                                                <animate attributeName="stop-color" values="#00FFAA;#0077FF;#00FFAA" dur="3s" repeatCount="indefinite" />
                                            </stop>
                                            <stop offset="100%" stop-color="#0077FF">
                                                <animate attributeName="stop-color" values="#0077FF;#00FFAA;#0077FF" dur="3s" repeatCount="indefinite" />
                                            </stop>
                                            </linearGradient>
                                        </defs>


                                        <path
                                            d="M7.273 60 L25 60 L40 45.333 V0 H0 V60 Z"
                                            fill="none"
                                            stroke="white"
                                            stroke-width="2"
                                            className="button-path"
                                        />


                                        <path
                                            d="M19.636 20 L19.636 10 L23.273 11.667 M19.636 10 L16 11.667"
                                            stroke="white"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            from="0 0"
                                            to="0 -40"
                                            begin="svg:hover"
                                            dur="0.5s"
                                            fill="freeze"
                                            />
                                        </path>

                                        
                                        <path
                                            d="M19.636 20 L19.636 10 L23.273 11.667 M19.636 10 L16 11.667"
                                            stroke="white"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            from="0 40"
                                            to="0 0"
                                            begin="svg:hover"
                                            dur="0.5s"
                                            fill="freeze"
                                            />
                                        </path>

    
                        </svg>

                        <div className='list1'>
                            <ul className='no-bullets'>
                                <li>Instagram | Linkedin</li>
                                <br />
                                <li>Designed by</li>
                                <b><li>Framework</li></b>
                                <br />
                                <li>Privacy Policy</li>
                                <li>Copyright © 2025 Metric Search. All rights Reserved.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className='arrow-svg2'>
                        <div className='list2'>
                            <ul className='no-bullets2'>
                                <li>Metric.Geo</li>
                                <li>Metric.Bio</li>
                                <li>About Us</li>
                                <li>Join Us</li>
                                <li>Cookie Policy</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className='2nd-part'>
                <div className='footer-metric-logo'>
                    <img src={metriclogo}  />
                </div>
            </div>
        </div>
    </div>
  )
}
