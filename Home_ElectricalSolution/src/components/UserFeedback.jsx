import React from "react";
import { useState, useEffect } from "react";

const UserFeedback = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2017/07/03/11/58/smoke-2467437_1280.jpg",
    "https://media.istockphoto.com/id/1341515382/photo/fog-in-black-smoke-and-mist-on-wooden-table-halloween-backdrop.jpg?s=2048x2048&w=is&k=20&c=-7kfv-LNCZX76BfPIccEWbQM3EqQ5JcySlMUo2uWdW8=",
    "https://cdn.pixabay.com/photo/2016/07/18/13/28/sky-1525902_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/04/07/20/41/waters-3299542_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/07/18/13/28/sky-1525902_1280.jpg",
    // Add more image URLs as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalImages, setTotalImages] = useState(images.length);

  useEffect(() => {
    const interval = setInterval(goToNext, 2000); // Change the interval as needed
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div classNameName="relative w-full">
      <div classNameName="relative h-56 md:h-96 overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          classNameName="absolute block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          alt="carousel item"
        />
      </div>
      <div classNameName="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            classNameName={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-700" : "bg-gray-300"
            }`}
            aria-current={index === currentIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>
      <button
        type="button"
        classNameName="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToPrevious}
        data-carousel-prev
      >
        <span classNameName="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            classNameName="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span classNameName="sr-only">Previous</span>
        </span>
        <span classNameName="text-white ml-2">{`${
          currentIndex + 1
        }/${totalImages}`}</span>
      </button>
      <button
        type="button"
        classNameName="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToNext}
        data-carousel-next
      >
        <span classNameName="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            classNameName="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span classNameName="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default UserFeedback;
