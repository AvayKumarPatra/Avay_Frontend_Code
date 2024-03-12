import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ children: images }) => {
  const [cur, setCur] = useState(0);
  // eslint-disable-next-line react/prop-types
  const prev = () => setCur((cur) => (cur === 0 ? images.length - 1 : cur - 1));

  const next = () => setCur((cur) => (cur === images.length - 1 ? 0 : cur + 1));
  return (
    <>
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${cur * 100}%)` }}
        >
          {images}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            className="p-1 rounded-full shadow bg-white-80 text-gray-400 hover:bg-white"
            onClick={prev}
          >
            <ChevronLeft size={40} />
          </button>
          <button
            className="p-1 rounded-full shadow bg-white-80 text-gray-400 hover:bg-white"
            onClick={next}
          >
            <ChevronRight size={40} />
          </button>
        </div>
        <div className="absolute buttom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <div
                key={i} // Adding a unique key prop is essential when using map in React
                className={`transition-all w-3 h-3 bg-red-300 rounded-full ${
                  cur === i ? "p-2" : "bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
