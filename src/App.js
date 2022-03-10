import React from 'react'
import { Banner, Product1, Product2, Product3, Product4, Product5, Product6, Product7, Product8, Product9 } from './components/images.js';
import './App.css';
function App() {
  const products = [
    {
      Name: `Sony EarDopes`,
      Price: 19990,
      Image: <Product1 />,
    },
    {
      Name: `Iphone 13`,
      Price: 79990,
      Image: <Product2 />,
    },
    {
      Name: `iWatch Series 4`,
      Price: 25990,
      Image: <Product3 />,
    },
    {
      Name: `Apple Airpods`,
      Price: 14990,
      Image: <Product4 />,
    },
    {
      Name: `Neckband`,
      Price: 4990,
      Image: <Product5 />,
    },
    {
      Name: `iPhone XS Max`,
      Price: 54990,
      Image: <Product6 />,
    },
    {
      Name: `Samsung S22 Ultra`,
      Price: 149990,
      Image: <Product7 />,
    },
    {
      Name: `Boat Rockers`,
      Price: 2990,
      Image: <Product8 />,
    },
    {
      Name: `OnePlus 10`,
      Price: 49990,
      Image: <Product9 />,
    }
  ]
  return (
    <>
      <div className='window'>
        <div className='banner'>
          <center>
            <Banner />
          </center>
        </div>
        <div className='products'>
          {products.map(product => (
            <div className='product'>
              <div className='product-image'>
                {product.Image}
              </div>
              <div className='product-name'>
                {product.Name}
              </div>
              <div className='product-price'>
                {product.Price + '₹'}
              </div>
              <button className='product-button' >Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

