/** @format */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Content from "./Content";
function LandingAnimation() {
  useGSAP(() => {
    gsap.to(".LandingAnimation", {
      delay: 1,
      y: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
    });
  });
  useGSAP(() => {
    gsap.to(".containerLanding", {
      top: -1,
      delay: 2,
      height: 0,
      duration: 1,
    });
  });
  return (
    <>
      <div className="main_container">
        <Content />
      </div>
      <div className="containerLanding">
        <h1 className="LandingAnimation">READY YOUR ENGINE</h1>
      </div>
    </>
  );
}

export default LandingAnimation;
