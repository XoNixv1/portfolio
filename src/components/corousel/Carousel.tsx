import React, { useState } from "react";
import "./carousel.scss";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = (): void => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = (): void => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={prevSlide}>
        &lt;
      </button>
      <div className="carousel-slide">
        <div
          className="carousel-images"
          style={{
            transform: `translateX(${-currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-image ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-button right" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
