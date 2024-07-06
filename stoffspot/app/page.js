"use client";
import styles from "./Home.module.css";
import { FaRegHeart } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
export default function Home() {
  const user = useSelector((state) => state.user.user);
  // console.log(user.name);
  const bestSellers = [
    { id: "1", name: "product name", price: 300, desc: "Product Desc" },
    { id: "2", name: "product name", price: 300, desc: "Product Desc" },
    { id: "3", name: "product name", price: 300, desc: "Product Desc" },
    { id: "4", name: "product name", price: 300, desc: "Product Desc" },
  ];
  const newArrival = [
    { id: "1", name: "product name", price: 300, desc: "Product Desc" },
    { id: "2", name: "product name", price: 300, desc: "Product Desc" },
    { id: "3", name: "product name", price: 300, desc: "Product Desc" },
    { id: "4", name: "product name", price: 300, desc: "Product Desc" },
  ];
  return (
    <main className="w-full">
      <section className="w-full">
        <article className="w-full h-[840px] bg-[#fffcbf] flex justify-center items-center">
          ADS
        </article>
        <article className="category">
          <h1>Best Sellers</h1>
          <div className="menus">
            <span>MENS</span>
            <span>WOMENS</span>
            <span>KIDS</span>
            <span>ART & CRAFT</span>
          </div>
          <div className="cards">
            {bestSellers.map((product) => {
              const { id, name, price, desc } = product;
              return (
                <div key={id} className="card">
                  <FaRegHeart className={styles.heart} />
                  <div className={styles.img}>{id}</div>
                  <strong>{name}</strong>

                  <desc>{desc}</desc>
                  <b>${price}</b>
                </div>
              );
            })}
          </div>
        </article>
        <article className="category">
          <h1>New Arrivals</h1>
          <div className="menus">
            <span>MENS</span>
            <span>WOMENS</span>
            <span>KIDS</span>
            <span>ART & CRAFT</span>
          </div>
          <div className="cards">
            {newArrival.map((product) => {
              const { id, name, price, desc } = product;

              return (
                <div key={id} className="card">
                  <FaRegHeart className={styles.heart} />
                  <div className={styles.img}>{id}</div>
                  <strong>{name}</strong>
                  <desc>{desc}</desc>
                  <b>${price}</b>
                </div>
              );
            })}
          </div>
        </article>
        <article className={styles.about}>
          <div className={styles.info}>
            <h3>Why is sustainable fashion better than rapid fashion?</h3>
            <p>
              Sustainable fashion prioritizes environmental and social
              responsibility throughout the manufacturing process. Unlike fast
              fashion, which frequently results in excessive waste, pollution,
              and worker exploitation, sustainable fashion emphasizes the use of
              environmentally friendly materials, the reduction of carbon
              footprints, and the promotion of ethical labour practices. Our aim
              is to build a sustainable product ecosystem to make the planet a
              better place to live for generations to come.
            </p>
          </div>
          <div className={styles.img50}></div>
        </article>
      </section>
    </main>
  );
}
