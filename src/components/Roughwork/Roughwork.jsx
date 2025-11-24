import React from 'react'

export default function GlobalReach() {
  useEffect(() => {
  const handleScroll = () => {
    const section = document.querySelector(".our-global-reach");
    const svgsWrapper = document.querySelector(".images-animation");

    const rect = section.getBoundingClientRect();

    // section screen par visible ho jaye to animation trigger
    if (rect.top < window.innerHeight * 0.6) {
      svgsWrapper.classList.add("scroll-animate");
    } else {
      svgsWrapper.classList.remove("scroll-animate");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


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

            <svg width="370" height="450" className="Austin ">
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

            <svg width="370" height="450" className="sandiego ">
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
      href={sandiego}
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
      04
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
      San Diego
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

            <svg width="370" height="450" className="london ">
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
      href={london}
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
      05
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
      London
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

            <svg width="370" height="450" className="leeds ">
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
      href={leeds}
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
      06
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
      Leeds
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

            <svg width="370" height="450" className="nottingham ">
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
      href={nottingham}
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
      07
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
      Nottingham
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
