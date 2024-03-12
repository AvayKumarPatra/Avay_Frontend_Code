import { useState, useEffect } from "react";
import "./HederScroll.css";

const HeaderScrollBar = () => {
  //   const images = [
  //     "https://cdn.pixabay.com/photo/2017/07/03/11/58/smoke-2467437_1280.jpg",
  //     "https://media.istockphoto.com/id/1341515382/photo/fog-in-black-smoke-and-mist-on-wooden-table-halloween-backdrop.jpg?s=2048x2048&w=is&k=20&c=-7kfv-LNCZX76BfPIccEWbQM3EqQ5JcySlMUo2uWdW8=",
  //     "https://cdn.pixabay.com/photo/2016/07/18/13/28/sky-1525902_1280.jpg",
  //     "https://cdn.pixabay.com/photo/2018/04/07/20/41/waters-3299542_1280.jpg",
  //     "https://cdn.pixabay.com/photo/2016/07/18/13/28/sky-1525902_1280.jpg",
  //     // Add more image URLs as needed
  //   ];

  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2017/07/03/11/58/smoke-2467437_1280.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2018/04/07/20/41/waters-3299542_1280.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2016/07/18/13/28/sky-1525902_1280.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default HeaderScrollBar;
