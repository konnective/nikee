// import Image from 'next/image';
// import Nav from './components/Nav';
// import Footer from './components/Footer';
// import Slider from './components/Slider';
// import ProductCard from './components/ProductCard';
import './cart.scss';

import CartItem from '../components/CartItem';

export default function Cart() {
  const arr = [1, 2, 2, 2, 2, 2];
  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cart-container">
        <div className="cart-item-container">
          {arr.map((item) => (
            <CartItem key={item.index} />
          ))}
        </div>
        <div className="cart-summary-container">
          <h3>Summary</h3>
          <div className="summary-info-container">
            <div className="summary-titles">
              <p>Subtotal:</p>
              <p>tax:</p>
              <p>Shipping:</p>
              <p>Total:</p>
            </div>
            <div className="summary-prices">
              <p>$27</p>
              <p>$2</p>
              <p>$10</p>
              <p>$39</p>
            </div>
          </div>
          <button className="summary-btn">Checkout Now</button>
        </div>
      </div>
    </div>
  );
}
