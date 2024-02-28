import './cartitem.scss';
import headphone12 from '../assets/earphones_b_2.webp';
import Image from 'next/image';

const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <Image src={headphone12} alt="no img" />
      </div>
      <div className="cart-item-info">
        <div className="cart-info-wrapper">
          <span className="cart-item-title">Boat Headphoes</span>
          <span className="cart-item-price">$500</span>
        </div>
        <div className="cart-action-wrapper">
          <button className="buy">Buy</button>
          <button className="remove">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
