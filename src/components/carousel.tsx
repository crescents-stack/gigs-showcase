"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlides = 3;
  const handleIncrease = () => {
    if (currentSlide < maxSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const handleDecrease = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const slides = [
    {
      id: 1,
      image: "bg-[url('/images/image1.webp')]",
    },
    {
      id: 2,
      image: "bg-[url('/images/image2.png')]",
    },
    {
      id: 3,
      image: "bg-[url('/images/image3.webp')]",
    },
  ];
  console.log("slide", currentSlide);
  return (
    <div className="relative min-h-[200px] overflow-hidden">
      <div className="absolute top-[45%] left-0 w-full flex items-center justify-between p-1 z-10 opacity-0 group-hover:opacity-100 transition ease-in-out duration-300">
        <button
          onClick={handleDecrease}
          className="bg-white border rounded-full cursor-pointer"
        >
          <ChevronLeft className="stroke-[1.3px] stroke-gray-400"/>
        </button>
        <button
          onClick={handleIncrease}
          className="bg-white border rounded-full cursor-pointer"
        >
          <ChevronRight className="stroke-[1.3px] stroke-gray-400"/>
        </button>
      </div>
      <div
        className={`flex items-center transition ease-in-out duration-300`}
        style={{ transform: `translateX(-${currentSlide * 320}px)` }}
      >
        {slides.map((slide) => {
          return (
            <div
              key={slide.id}
              className={`min-w-[320px] w-[320px] min-h-[200px] ${slide.image} bg-cover bg-center`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
