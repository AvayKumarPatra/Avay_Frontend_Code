import "./HederScroll.css";
import Carousel from "./Carousel";

const HeaderScrollBar = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2017/07/03/11/58/smoke-2467437_1280.jpg",
    "https://media.istockphoto.com/id/1341515382/photo/fog-in-black-smoke-and-mist-on-wooden-table-halloween-backdrop.jpg?s=2048x2048&w=is&k=20&c=-7kfv-LNCZX76BfPIccEWbQM3EqQ5JcySlMUo2uWdW8=",
    "https://cdn.pixabay.com/photo/2016/07/18/13/28/sky-1525902_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/04/07/20/41/waters-3299542_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/07/18/13/28/sky-1525902_1280.jpg",
    // Add more image URLs as needed
  ];

  return (
    <>
      <div className="App">
        <div className="max-w-lg">
          <Carousel autoSlide={true}>
            {images.map((image) => (
              // eslint-disable-next-line react/jsx-key
              <img src={image} />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default HeaderScrollBar;
