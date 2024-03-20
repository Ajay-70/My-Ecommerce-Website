import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <img src="" alt="Shop" />,
  <img src="" alt="Shop" />,
  <img
    src="https://img.freepik.com/free-photo/shop-is-now-open_53876-15332.jpg?w=1060&t=st=1710836845~exp=1710837445~hmac=a4231cb502fe85e2e91a84112c429d023dbcc165355206ed8f3e77e7e1af75c9"
    alt="Shop"
  />,
  <img
    src="https://img.freepik.com/free-photo/shop-is-now-open_53876-15332.jpg?w=1060&t=st=1710836845~exp=1710837445~hmac=a4231cb502fe85e2e91a84112c429d023dbcc165355206ed8f3e77e7e1af75c9"
    alt="Shop"
  />,
  <img
    src="https://img.freepik.com/free-photo/shop-is-now-open_53876-15332.jpg?w=1060&t=st=1710836845~exp=1710837445~hmac=a4231cb502fe85e2e91a84112c429d023dbcc165355206ed8f3e77e7e1af75c9"
    alt="Shop"
  />,
];

const Carousel = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    responsive={responsive}
    controlsStrategy="alternate"
  />
);

export default Carousel;
