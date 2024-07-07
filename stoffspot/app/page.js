"use client";
import { Heart } from "@/components/SVG";
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
    <main className="w-full overflow-hidden">
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
          <div className="cards w-full xl:w-[90%]">
            {bestSellers.map((product) => {
              const { id, name, price, desc } = product;
              return (
                <div key={id} className="card w-40 xl:w-[335px]">
                  <div className="heart relative top-56 left-32  xl:top-[26rem] xl:left-72 xl:scale-150">
                    <Heart className="w-5 xl:w-10 xl:h-10 " />
                  </div>
                  <div className="img w-40 h-60 xl:w-[335px] xl:h-[445px]">
                    {id}
                  </div>
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
          <div className="cards w-full  xl:w-[90%]">
            {newArrival.map((product) => {
              const { id, name, price, desc } = product;

              return (
                <div key={id} className="card w-40 xl:w-[335px]">
                  <div className="heart relative top-56 left-32  xl:top-[26rem] xl:left-72 xl:scale-150">
                    <Heart className="w-5 xl:w-10 xl:h-10" />
                  </div>
                  <div className="img w-40 h-60 xl:w-[335px] xl:h-[445px]">
                    {id}
                  </div>
                  <strong>{name}</strong>
                  <desc>{desc}</desc>
                  <b>${price}</b>
                </div>
              );
            })}
          </div>
        </article>
        <article className="w-full h-[500px] px-2 flex my-8 text-xs md:text-sm md:h-[840px] xl:text-2xl ">
          <div className="w-1/2 h-full text-left xl:pl-40 xl:pt-8">
            <h3 className="text-[#dac400] my-4 text-2xl">
              Why is sustainable fashion better than rapid fashion?
            </h3>
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
          <div className="w-1/2 h-[500px] rounded-[28px] bg-hero bg-cover bg-center xl:h-full"></div>
        </article>
      </section>
    </main>
  );
}
