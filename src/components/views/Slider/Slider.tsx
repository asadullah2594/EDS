import React, { useState, useEffect } from "react";
import "./emerald.css";

import Slide1 from "../../../assets/slides/slide1.png";
import Slide2 from "../../../assets/slides/slide2.png";
import Slide3 from "../../../assets/slides/slide3.png";
import Slide4 from "../../../assets/slides/slide4.png";
const images = [Slide1, Slide2, Slide3, Slide4];

const slides = [
  {
    title: "Instant Access",
    content:
      "Access vendor info, real time reports, and track inventory effortlessly right at your finger tips.",
  },
  {
    title: "Optimize Costs",
    content:
      "Monitor warranties and reduce expenses with our analytics tools to turn uninformed decisions into data driven initiatives.",
  },
  {
    title: "Streamline Management",
    content:
      "Organize quotes efficiently, ensure organization compliance, and manage team workloads rigorously for a well-structured operational framework.",
  },
  {
    title: "Boost Efficiency",
    content:
      "Enhance workflows, forecast costs accurately, and gain comprehensive insights to drive informed decision-making.",
  },
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };
  // text-white-value
  return (
    <div className="slider-container h-full">
      <div className="slider-wrapper relative">
        {images.map((image, index) => (
          <div
            className={`slide ${index === currentIndex ? "active" : ""}`}
            key={index}
          >
            <img
              src={image}
              className={`lg:text-3xl h-[850px] text-base font-medium lg:leading-8 text-gray-800 font-inter lg:pl-0  slide-in-top slide-title ${
                index === currentIndex ? "fade-in" : "fade-out"
              }`}
            />
          </div>

          // <div
          //   className={`slide ${index === currentIndex ? "active" : ""}`}
          //   key={index}
          // >
          //   <h2
          //     className={`lg:text-3xl text-base font-medium lg:leading-8 text-gray-800 font-inter lg:pl-0 pl-8 slide-in-top slide-title ${
          //       index === currentIndex ? "fade-in" : "fade-out"
          //     }`}
          //   >
          //     {slide.title}
          //   </h2>
          //   <p
          //     className={`lg:text-base text-xs font-normal lg:leading-6 leading-5 font-inter text-gray-600 max-w-[28rem] lg:min-w-[28rem] w-full lg:pl-0 pl-8 slide-content ${
          //       index === currentIndex ? "fade-in" : "fade-out"
          //     }`}
          //   >
          //     {slide.content}
          //   </p>
          // </div>
        ))}
        <div className="bg-red-400 px-[80px] py-[48px] absolute z-30 bottom-10 rounded-b-2xl w-full">
          {slides.map((data, index) => {
            return (
              <div
                className={`slide !h-fit ${
                  index === currentIndex ? "active" : ""
                }  `}
              >
                <div
                  className={`text-base text-gray-800 font-inter lg:pl-0  ${
                    index === currentIndex ? "fade-in" : "fade-out"
                  }`}
                >
                  <div className="text-3 font-medium">{data.title}</div>
                  <div className="mt-1.5 font-light">{data.content}</div>
                </div>
              </div>
            );
          })}

          <div className="navigation-dots">
            {images.map((_, index) => (
              <div className="flex">
                <div
                  key={index}
                  className={`dot flex ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
