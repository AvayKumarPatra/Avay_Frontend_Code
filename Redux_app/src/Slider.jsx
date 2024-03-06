const Slider = ({ images }) => {
  return (
    <>
      {images.map((img, index) => (
        <img key={index} src={img} alt="Not found" />
      ))}
    </>
  );
};

export default Slider;
