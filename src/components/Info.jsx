/** @format */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Info() {
  useGSAP(() => {
    gsap.to(".info_container", {
      delay: 3.5,
      y: -150,
      duration: 1,
      opacity: 1,
      stagger: 1,
    });
  });
  return (
    <>
      <div className="info_container">
        <ul>
          <li className="title">TOP SPEED</li>
          <li>182 MPH</li>
        </ul>
        <ul>
          <li className="title">POWER [PS]</li>
          <li>385 PS</li>
        </ul>
        <ul>
          <li className="title">MAX. TORQUE[MANUAL]</li>
          <li>450 NM</li>
        </ul>
        <ul>
          <li className="title">DISPLACEMENT</li>
          <li>
            2,981 CM<sup>3</sup>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Info;
