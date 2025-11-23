// CustomCursor.jsx
import { useEffect } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let posX = mouseX;
    let posY = mouseY;

    const speed = 0.18; // smooth follow speed

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.opacity = "1";
    };

    const animate = () => {
      posX += (mouseX - posX) * speed;
      posY += (mouseY - posY) * speed;

      cursor.style.left = posX + "px";
      cursor.style.top = posY + "px";

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", () => (cursor.style.opacity = "0"));
    window.addEventListener("mouseenter", () => (cursor.style.opacity = "1"));

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div className="custom-cursor">
      <div className="inner-dot"></div>
    </div>
  );
}
