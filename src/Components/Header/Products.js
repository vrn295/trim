import React from "react";
import "./Products.css";
import { productData } from "./ProductData";

const Products = () => {
  return (
    <div className="products">
      <h1 className="product-h1">New Arrivals</h1>
      <ul className="product-list">
        {productData.map((data, key) => {
          return (
            <div className="product-container" key={key}>
              <div>
                {/* <span className='product-hover-text'>
                  Pariatur nulla nisi veniam reprehenderit ipsum duis amet
                  proident aliquip laborum labore dolor. Aliquip sint est
                  laborum enim quis laboris amet aliquip est ut qui aliqua
                  eiusmod.
                </span> */}
                <img
                  className="product-img"
                  src={require(`./ProductsImage/product${data.image}.jpg`)}
                  alt={data.name}
                ></img>
              </div>
              <span className="product-name">{data.name}</span>
              <span className="product-price">{data.price}</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
