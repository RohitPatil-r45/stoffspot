"use client";
import Link from "next/link";
import React, { useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: "",
      title: "All about you",
      desc: "Yellow and off white floral print",
      price: 650,
      og_price: 1300,
      discount: 600,
    },
    {
      id: 2,
      img: "",
      title: "All about you",
      desc: "Yellow and off white floral print",
      price: 650,
      og_price: 1300,
      discount: 600,
    },
    {
      id: 3,
      img: "",
      title: "All about you",
      desc: "Yellow and off white floral print",
      price: 650,
      og_price: 1300,
      discount: 600,
    },
    {
      id: 4,
      img: "",
      title: "All about you",
      desc: "Yellow and off white floral print",
      price: 650,
      og_price: 1300,
      discount: 600,
    },
    {
      id: 5,
      img: "",
      title: "All about you",
      desc: "Yellow and off white floral print",
      price: 650,
      og_price: 1300,
      discount: 600,
    },
    {
      id: 6,
      img: "",
      title: "All about you",
      desc: "Yellow and off white floral print",
      price: 650,
      og_price: 1300,
      discount: 600,
    },
    {
      id: 7,
      img: "",
      title: "All about you",
      desc: "Yellow and off white floral print",
      price: 650,
      og_price: 1300,
      discount: 600,
    },
    {
      id: 8,
      img: "",
      title: "All about you",
      desc: "Yellow and off white floral print",
      price: 650,
      og_price: 1300,
      discount: 600,
    },
    {
      id: 9,
      img: "",
      title: "All about you",
      desc: "Yellow and off white floral print",
      price: 650,
      og_price: 1300,
      discount: 600,
    },
    {
      id: 10,
      img: "",
      title: "All about you",
      desc: "Yellow and off white floral print",
      price: 650,
      og_price: 1300,
      discount: 600,
    },
    {
      id: 11,
      img: "",
      title: "All about you",
      desc: "Yellow and off white floral print",
      price: 650,
      og_price: 1300,
      discount: 600,
    },
    {
      id: 12,
      img: "",
      title: "All about you",
      desc: "Yellow and off white floral print",
      price: 650,
      og_price: 1300,
      discount: 600,
    },
  ]);
  return (
    <main className="w-full min-h-screen flex ">
      <aside className="hidden lg:w-[20%] h-[50vh] p-4 lg:flex flex-col items-center ">
        <div className="text-base">
          <b>Filter</b>
          <span className="ml-4 lg:ml-16 text-primary">Clear All</span>
        </div>
        <div className="w-full pl-2 lg:pl-10 border-t border-black flex flex-col items-start">
          <span>Men</span>
          <span>Women</span>
          <span>Boys</span>
          <span>Girls</span>
        </div>
        <div className="w-full pl-2 lg:pl-10 border-t border-black flex flex-col items-start">
          <b>categories</b>
          <span>Tops</span>
          <span>Thermal Tops</span>
          <span>Swim Tops</span>
        </div>
      </aside>
      <section className="w-full lg:w-[80%] flex flex-col items-center p-2 lg:p-10 h-auto border-l border-black">
        <h1 className="text-4xl font-semibold pb-8">Women's Tops</h1>
        <article className="w-full h-auto grid productGrid gap-12 justify-center">
          {/* grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl: */}
          {products.map((product) => {
            const { id, title, desc, price, og_price, discount } = product;
            return (
              <Link
                href={`/products/${id}`}
                key={id}
                className="flex flex-col items-start"
              >
                <div className="bg-[#FFFBA1] rounded-2xl w-60 h-80 pb-2"></div>
                <b>{title}</b>
                <desc className="capitalize">{desc.slice(0, 30)}...</desc>
                <div>
                  <span>₹ {price} </span>
                  <span className="line-through px-2">₹ {og_price}</span>
                  <span className="text-secondary">₹ {discount} Off</span>
                </div>
              </Link>
            );
          })}
        </article>
      </section>
    </main>
  );
};

export default ProductsPage;
