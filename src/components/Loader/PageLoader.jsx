import { useEffect, useState } from "react";
import logo from '../../images/metric-org-logo.png'; // <-- YOUR LOGO
import '../../components/Loader/PageLoader.css'

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [scaleUp, setScaleUp] = useState(false);

  useEffect(() => {
    // Step 1: Start logo animation after 100ms
    setTimeout(() => {
      setScaleUp(true);
    }, 100);

    // Step 2: Hide loader after 1.5s
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-loader ${visible ? "" : "hide"}`}>
      <img
        src={logo}
        className={`loader-logo ${scaleUp ? "scale" : ""}`}
        alt="logo"
      />
    </div>
  );
}
