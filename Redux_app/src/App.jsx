import Slider from "./Slider";

const App = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2017/02/12/18/26/squirrel-2060807_1280.jpg",
    "https://media.istockphoto.com/id/1483708496/photo/a-man-working-at-an-auto-repair-shop.jpg?s=2048x2048&w=is&k=20&c=JO5kUqt2bTu8jPzIZlCEA-3P2IgaEvOxwJpy2_FtIAc=",
    "https://cdn.pixabay.com/photo/2022/08/24/05/44/duck-7406987_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/02/12/18/26/squirrel-2060807_1280.jpg",
  ];

  return (
    <>
      <h1 className="text-red-700">Carousel</h1>
      <Slider images={images} />
    </>
  );
};

export default App;
