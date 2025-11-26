import React, { useEffect, useRef } from "react";
import "../../components/Global-reach/GlobalReach.css";
import NewYork from "../../images/new-york.webp";
import FortLauderale from "../../images/fort-lauderdale.webp";
import Austin from "../../images/austin.webp";
import sandiego from "../../images/san-diego.webp";
import london from "../../images/london.webp";
import leeds from "../../images/leeds.webp";
import nottingham from "../../images/nottingham.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GlobalReach() {
  const sectionRef = useRef(null);

  useEffect(() => {
  const section = sectionRef.current;
  if (!section) return;

  const cards = gsap.utils.toArray(
    section.querySelectorAll(".images-animation svg")
  );
  if (!cards.length) return;

  // CSS se current positions + rotations
  const positions = cards.map((card) => ({
    top: parseFloat(gsap.getProperty(card, "top")),
    left: parseFloat(gsap.getProperty(card, "left")),
    rotation: parseFloat(gsap.getProperty(card, "rotation")) || 0,
  }));

  const first = positions[0];
  const last = positions[positions.length - 1];

  // itna shift ke last card first ki jagah aa jaye
  const deltaX = first.left - last.left;
  const deltaY = first.top - last.top;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "+=800",
      scrub: 1,
      pin: true,
      // markers: true,
    },
  });

  const total = cards.length;

  // 🎯 har card ke liye final rotation:
  // i = 0  → -30°
  // i = last → 0°
  const endRotations = positions.map((pos, i) => {
    const minEnd = -30;   // first card final = -30°
    const maxEnd = 0;     // last card final = 0° (seedha)
    const t = total > 1 ? i / (total - 1) : 0; // 0 → 1
    return minEnd + t * (maxEnd - minEnd);     // lerp
  });

  tl.to(
    cards,
    {
      top: (i) => positions[i].top + deltaY,
      left: (i) => positions[i].left + deltaX,
      rotation: (i) => endRotations[i], // 👈 yahan naya rotation
      ease: "none",
    },
    0
  );

  return () => {
    tl.scrollTrigger && tl.scrollTrigger.kill();
    tl.kill();
  };
}, []);




  return (
    <div className="our-global-reach" ref={sectionRef}>
      <div className="GlobalReach">
        <div className="GlobalReach-heading">
          <h2>
            <span className="big">Our Global</span> <br />
            <span className="small">Reach</span>
          </h2>
        </div>

        <div className="images-animation">
          {/* 1 – New York */}
          <svg width="370" height="450" className="NewYork">
            <defs>
              <clipPath id="clipNY">
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
            <g clipPath="url(#clipNY)">
              <image
                href={NewYork}
                x="0"
                y="0"
                width="370"
                height="450"
                preserveAspectRatio="xMidYMid slice"
              />
              <text
                x="40"
                y="75"
                fontSize="35"
                fontWeight="bold"
                fill="white"
                fontFamily="Segoe UI"
              >
                01
              </text>
              <text
                x="40"
                y="400"
                fontSize="35"
                fontWeight="bold"
                fill="white"
                fontFamily="Segoe UI"
              >
                New York
              </text>
            </g>
          </svg>

          {/* 2 – Fort Lauderdale */}
          <svg width="370" height="450" className="Fort-Lauderdale">
            <defs>
              <clipPath id="clipFL">
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
            <g clipPath="url(#clipFL)">
              <image
                href={FortLauderale}
                x="0"
                y="0"
                width="370"
                height="450"
                preserveAspectRatio="xMidYMid slice"
              />
              <text
                x="40"
                y="75"
                fontSize="35"
                fontWeight="bold"
                fill="white"
                fontFamily="Segoe UI"
              >
                02
              </text>
              <text
                x="40"
                y="400"
                fontSize="35"
                fontWeight="bold"
                fill="white"
                fontFamily="Segoe UI"
              >
                Fort Lauderdale
              </text>
            </g>
          </svg>

          {/* 3 – Austin */}
          <svg width="370" height="450" className="Austin">
            <defs>
              <clipPath id="clipAUS">
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
            <g clipPath="url(#clipAUS)">
              <image
                href={Austin}
                x="0"
                y="0"
                width="370"
                height="450"
                preserveAspectRatio="xMidYMid slice"
              />
              <text
                x="40"
                y="75"
                fontSize="35"
                fontWeight="bold"
                fill="white"
                fontFamily="Segoe UI"
              >
                03
              </text>
              <text
                x="40"
                y="400"
                fontSize="35"
                fontWeight="bold"
                fill="white"
                fontFamily="Segoe UI"
              >
                Austin
              </text>
            </g>
          </svg>

          {/* 4 – San Diego */}
          <svg width="370" height="450" className="sandiego">
            <defs>
              <clipPath id="clipSD">
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
            <g clipPath="url(#clipSD)">
              <image
                href={sandiego}
                x="0"
                y="0"
                width="370"
                height="450"
                preserveAspectRatio="xMidYMid slice"
              />
              <text
                x="40"
                y="75"
                fontSize="35"
                fontWeight="bold"
                fill="white"
                fontFamily="Segoe UI"
              >
                04
              </text>
              <text
                x="40"
                y="400"
                fontSize="35"
                fontWeight="bold"
                fill="white"
                fontFamily="Segoe UI"
              >
                San Diego
              </text>
            </g>
          </svg>

          {/* 5 – London */}
          <svg width="370" height="450" className="london">
            <defs>
              <clipPath id="clipLDN">
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
            <g clipPath="url(#clipLDN)">
              <image
                href={london}
                x="0"
                y="0"
                width="370"
                height="450"
                preserveAspectRatio="xMidYMid slice"
              />
              <text
                x="40"
                y="75"
                fontSize="35"
                fontWeight="bold"
                fill="white"
                fontFamily="Segoe UI"
              >
                05
              </text>
              <text
                x="40"
                y="400"
                fontSize="35"
                fontWeight="bold"
                fill="white"
                fontFamily="Segoe UI"
              >
                London
              </text>
            </g>
          </svg>

          {/* 6 – Leeds */}
          <svg width="370" height="450" className="leeds">
            <defs>
              <clipPath id="clipLEEDS">
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
            <g clipPath="url(#clipLEEDS)">
              <image
                href={leeds}
                x="0"
                y="0"
                width="370"
                height="450"
                preserveAspectRatio="xMidYMid slice"
              />
              <text
                x="40"
                y="75"
                fontSize="35"
                fontWeight="bold"
                fill="white"
                fontFamily="Segoe UI"
              >
                06
              </text>
              <text
                x="40"
                y="400"
                fontSize="35"
                fontWeight="bold"
                fill="white"
                fontFamily="Segoe UI"
              >
                Leeds
              </text>
            </g>
          </svg>

          {/* 7 – Nottingham */}
          <svg width="370" height="450" className="nottingham">
            <defs>
              <clipPath id="clipNOTT">
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
            <g clipPath="url(#clipNOTT)">
              <image
                href={nottingham}
                x="0"
                y="0"
                width="370"
                height="450"
                preserveAspectRatio="xMidYMid slice"
              />
              <text
                x="40"
                y="75"
                fontSize="35"
                fontWeight="bold"
                fill="white"
                fontFamily="Segoe UI"
              >
                07
              </text>
              <text
                x="40"
                y="400"
                fontSize="35"
                fontWeight="bold"
                fill="white"
                fontFamily="Segoe UI"
              >
                Nottingham
              </text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
