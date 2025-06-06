/** @format */

import { useState, useEffect, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import iris from "../assets/image/iris.png";
import yellow from "../assets/image/yellow.png";
import red from "../assets/image/red.png";
import Marinered from "../assets/image/Marinered.png";
import Darkgrey from "../assets/image/Darkgrey.png";
import Info from "./Info";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Scroll() {
  useGSAP(() => {
    gsap.to(".container", {
      delay: 1.5,
      duration: 1,
      opacity: 1,
      stagger: 1,
    });
  });

  const [counter, setCounter] = useState(0);
  const images = [iris, yellow, red, Marinered, Darkgrey];
  const texts = ["CRAYON", "YELLOW", "GUARDS RED", "CRAMINE RED", "AGATE GREY"];
  const containerRef = useRef(null);

  useEffect(() => {
    const imgElements = document.querySelectorAll(".img");
    imgElements.forEach((img, index) => {
      img.style.left = `${index * 100}%`;
    });
  }, []);

  useEffect(() => {
    slideText();
    updateBackgroundColor();
  }, [counter]);

  const slideText = () => {
    const textElements = document.querySelectorAll(".text");
    textElements.forEach((text, index) => {
      text.style.transform = `translateY(${(index - counter) * 100}%)`;
      text.style.opacity = index === counter ? "1" : "0";
    });
  };
  const slideImg = () => {
    const imgElements = document.querySelectorAll(".img");
    imgElements.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  };

  useEffect(() => {
    slideImg();
    updateBackgroundColor();
  }, [counter]);

  const updateBackgroundColor = () => {
    if (!containerRef.current) return;
    const colors = ["whitesmoke", "yellow", "red", "maroon", "darkgrey"];
    containerRef.current.style.backgroundColor = colors[counter];
  };

  const next = () => {
    setCounter((prevCounter) =>
      prevCounter < images.length - 1 ? prevCounter + 1 : prevCounter
    );
  };

  const prev = () => {
    setCounter((prevCounter) =>
      prevCounter > 0 ? prevCounter - 1 : prevCounter
    );
  };

  return (
    <>
      <div ref={containerRef} className="scroll-container main_container">
        <div className="text_container">
          {texts.map((text, index) => (
            <p
              key={index}
              className={`text ${index === counter ? "active" : ""}`}>
              {text}
            </p>
          ))}
        </div>
        <div className="container">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              className="img"
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="btn_contianer">
          <button className="btn btn1" onClick={prev}>
            <IoIosArrowBack />
          </button>
          <button className="btn btn2" onClick={next}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <Info />
    </>
  );
}

export default Scroll;
