import React from 'react';
import './productcard.scss';
import headphone1 from '../assets/earphones_b_2.webp';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = () => {
  return (
    <div className="product-card">
      <Link href="/product/4">
        <div className="img-container">
          <Image src={headphone1} alt="no img" />
        </div>
      </Link>
      <div className="info-container">
        <span className="item-title">XYZ</span>
        <span className="item-price">$500</span>
      </div>
    </div>
  );
};

export default ProductCard;
