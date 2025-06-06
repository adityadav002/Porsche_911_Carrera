/** @format */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Scroll from "./Scroll";

function Content() {
  useGSAP(() => {
    gsap.to(".porsche", {
      delay: 1.5,
      y: -237,
      duration: 2.5,
      stagger: 1,
      opacity: 1,
      fontSize: "20px",
      zIndex: 1,
    });
    gsap.to(".carrera", {
      delay: 2,
      y: -250,
      duration: 2.5,
      stagger: 1,
      opacity: 1,
      fontSize: "40px",
      zIndex: 1,
      fontWeight: "lighter",
    });
  });

  return (
    <>
      <p className="porsche">PORSCHE</p>
      <br />
      <h3 className="carrera">911 Carrera</h3>
      <Scroll />
    </>
  );
}

export default Content;
