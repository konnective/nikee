'use client';
import Image from 'next/image';
import './slider.scss';
import { useState } from 'react';
import headphone_banner from '../assets/headphones_banner.webp';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  const styyle = {
    transform: 'translate(50px, 20px)',
  };
  // console.log(slideIndex);
  const arr = [
    {
      id: 1,
      color: '',
    },
    {
      id: 2,
      color: '',
    },
    {
      id: 3,
      color: '',
    },
  ];
  return (
    <div className="container">
      <div className="slider-left" onClick={() => handleClick('left')}>
        L
      </div>
      <div
        className="wrapper"
        style={{ transform: `translate(${slideIndex * -100}vw)` }}
      >
        {arr.map((item) => (
          <div
            className="slide"
            key={item.id}
            style={{
              backgroundColor: item.color,
            }}
          >
            <div className="img-container">
              <Image src={headphone_banner} alt="" />
            </div>
            <div className="info-container">
              <h1>
                Introducing the Ultimate Sound Experience: Our Latest
                Headphones!
              </h1>
              <p>
                Immerse yourself in unparalleled audio quality with our
                state-of-the-art headphones. Designed for audiophiles and music
                enthusiasts, these premium headphones deliver crystal-clear
                sound, deep bass, and a rich, immersive listening experience.
              </p>
              <button className="banner-btn">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-right" onClick={() => handleClick('right')}>
        R
      </div>
    </div>
  );
};

export default Slider;
