'use client';
import Image from 'next/image';
import headphone3 from '../../assets/headphone3.webp';
import { useState } from 'react';
import Link from 'next/link';

export default function Product() {
  const [qty, setQty] = useState(0);

  const handleClick = (type) => {
    if (type == 'plus') {
      setQty((prev) => prev + 1);
    } else {
      setQty((prev) => (prev === 0 ? 0 : prev - 1));
    }
  };
  // console.log(qty);
  return (
    <div className="product-detail">
      <h1>Product details</h1>
      <div className="product-detail-wrapper">
        <div className="image-container">
          <Image src={headphone3} alt="" />
        </div>
        <div className="info-container">
          <h2>Product title</h2>
          <p>
            [Highlight the key feature]: Is it active noise cancellation that
            shuts out the world and lets you focus on your audio? Crystal-clear
            audio quality with precision engineering and powerful drivers?
            Effortless wireless freedom with seamless Bluetooth connectivity and
            extended battery life? Choose the feature that best defines your
            product and put it front and center. Crafted for comfort: Experience
            plush memory foam ear cushions that adapt to your ears for
            pressure-free listening, even during extended sessions. A
            lightweight and flexible design ensures long-lasting comfort, no
            matter where your day takes you.
          </p>
          <span className="product-detail-price">$500</span>
          <div className="qty-wrapper">
            <div className="plus" onClick={() => handleClick('minus')}>
              M
            </div>
            <input className="qty-input" value={qty} readOnly />
            <div className="plus" onClick={() => handleClick('plus')}>
              P
            </div>
          </div>
          <div className="btn-wrapper">
            <button className="product-detail-btn">Buy Now</button>
            <Link href={'/cart'}>
              <button className="product-detail-btn2">Add To Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
