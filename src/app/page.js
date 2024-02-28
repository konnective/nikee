import Image from 'next/image';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Slider from './components/Slider';
import ProductCard from './components/ProductCard';

export default function Home() {
  const arr = [
    {
      id: 1,
      name: 'some pro',
    },
    {
      id: 2,
      name: 'some pro',
    },
    {
      id: 3,
      name: 'some pro',
    },
    {
      id: 4,
      name: 'some pro',
    },
    {
      id: 5,
      name: 'some pro',
    },
    {
      id: 6,
      name: 'some pro',
    },
    {
      id: 7,
      name: 'some pro',
    },
  ];
  return (
    <div className="main-container">
      <Slider />
      <h1>Our best products</h1>
      <div className="product-container">
        {arr.map((item) => (
          <ProductCard key={item.id} />
        ))}
      </div>
    </div>
  );
}
