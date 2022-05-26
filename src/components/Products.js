import React from "react";
import ProductItem from "./ProductItem";

let productsData = [
  {
    name: "mouse",
    desc: "This is Mouse Description",
  },
  {
    name: "keyboard",
    desc: "This is keyboard Description",
  },
  {
    name: "headphone",
    desc: "This is headphone Description",
  },
];

const Products = () => {
  return (
    <section>
      {productsData.map((item, index) => {
        return <ProductItem key={index} name={item.name} desc={item.desc} />;
      })}
    </section>
  );
};

export default Products;
