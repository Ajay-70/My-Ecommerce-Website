import React from "react";
import AliceCarousel from "react-alice-carousel";
import { mainCarouselData } from "./MainCarouselData";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCarousel = () => {
  const items = mainCarouselData.map((item) => (
    <img
      className="cursor-pointer"
      role="presentation"
      src={item.image}
      style={{ width: "100%", height: "700px" }}
    />
  ));
  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      animationDuration={4000}
      infinite
      mouseTracking
    />
  );
};

export default MainCarousel;
