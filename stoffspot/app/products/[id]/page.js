"use client";
import Accordian from "@/components/Accordian";
import { Cart } from "@/components/SVG";
import React, { useState } from "react";
import { FaChevronDown, FaRegStar, FaStar } from "react-icons/fa";

const SingleProduct = ({ params }) => {
  const [product, setProduct] = useState({
    id: 1,
    img: "",
    title: "All about you",
    desc: "Yellow and off white floral print",
    info: "Short, fitted, one-shoulder top in stretch jersey with an asymmetric neckline and one wide shoulder strap with an irregular metal ring. Article number:1240883001 Size:XXS: Width: 64 cm, Length: 47 cmXS: Width: 68 cm, Length: 49 cmS: Width: 76 cm, Length: 50 cmM: Width: 82 cm, Length: 52 cmL: Width: 88 cm, Length: 53 cmXL: Width: 98 cm, Length: 55 cmLength: ShortSleeve Length: SleevelessFit: Slim fitStyle: One-shoulderDescription: Black/Silver-coloured, Solid colourConcept: DIVIDEDPrice (MRP): Rs. 999.00 incl. of all taxesCountry of production: CambodiaCommon generic name: Tank topNet Quantity: 1 NManufactured by: N/AMarketed and imported by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi -110017 IndiaDate of manufacture: N/ADate of import: 06-2024Customer service: In case of consumer complaint, write to H&M Hennes & Mauritz Retail PVT. Ltd, A Wing,D3, 2nd Floor,Read moreDisclaimer: This information is based on sample of the product displayed on website. There may be changein the information on label attached to the product delivered to the customer due to size chosen, date ofimport, name of manufacturer (in case of manufacturing in India), country of manufacture, etc. The exactdetail relevant to the product delivered to the customer will reflect in the label attached to theproduct",
    price: 650,
    og_price: 1300,
    discount: 600,
  });
  const { id, title, desc, price, info, og_price, discount } = product;
  return (
    <section className="w-full h-auto p-4 flex">
      <article className="w-[55%] h-fit p-4 flex flex-wrap justify-evenly items-start gap-4">
        <div className="bg-[#FFFBA1] rounded-2xl w-[380px] h-[450px] pb-2" />
        <div className="bg-[#FFFBA1] rounded-2xl w-[380px] h-[450px] pb-2" />
        <div className="bg-[#FFFBA1] rounded-2xl w-[380px] h-[450px] pb-2" />
        <div className="bg-[#FFFBA1] rounded-2xl w-[380px] h-[450px] pb-2" />
      </article>
      <article className="w-[45%] p-10 flex flex-col items-start">
        <b className="text-2xl">{title}</b>
        <desc className="capitalize">{desc.slice(0, 30)}...</desc>
        <div>
          <span>₹ {price} </span>
          <span className="line-through px-2">₹ {og_price}</span>
          <span className="text-secondary">₹ {discount} Off</span>
        </div>
        <div className="text-secondary">inclusive all taxes</div>
        <div className="w-full flex justify-evenly my-2">
          <div>
            <div className="w-10 h-12 bg-primary rounded-md"></div>
            <span>Yellow</span>
          </div>
          <div>
            <div className="w-10 h-12 bg-red-500 rounded-md"></div>
            <span>Red</span>
          </div>
          <div>
            <div className="w-10 h-12 bg-green-500 rounded-md"></div>
            <span>Green</span>
          </div>
        </div>
        <div className="w-full my-2">
          <h2 className="text-lg font-bold">Sizes</h2>
          <div className="w-full flex justify-evenly">
            <span className="text-center align-middle py-2 px-6 text-xl rounded-md border-primary border-2">
              XS
            </span>
            <span className="text-center align-middle py-2 px-6 text-xl rounded-md border-primary border-2">
              S
            </span>
            <span className="text-center align-middle py-2 px-6 text-xl rounded-md border-primary border-2">
              M
            </span>
            <span className="text-center align-middle py-2 px-6 text-xl rounded-md border-primary border-2">
              L
            </span>
            <span className="text-center align-middle py-2 px-6 text-xl rounded-md border-primary border-2">
              XL
            </span>
            <span className="text-center align-middle py-2 px-6 text-xl rounded-md border-primary border-2">
              XXL
            </span>
            <span className="text-center align-middle py-2 px-6 text-xl rounded-md border-primary border-2">
              XXXL
            </span>
          </div>
          <h2 className="mt-4 underline">Size Guide</h2>
        </div>
        <button
          type="button"
          className="w-full bg-primary text-white text-xl p-4 flex justify-center items-center"
        >
          <Cart color="white" /> <span className="ml-4">Add</span>
        </button>
        <div className="flex flex-col my-4">
          <span>Delivery Time: 2-7 days</span>
          <span>Delivery and Payments</span>
        </div>
        <div className="w-full border-b border-black">
          <div className="w-full ">
            <Accordian title={"Description"} info={info} />
            <Accordian title={"Materials"} info={info} />
            <Accordian title={"Care Guide"} info={info} />
          </div>
        </div>
        <div className="w-full mt-5 flex">
          <FaStar className="text-primary mr-6 scale-150" />
          <FaStar className="text-primary mr-6 scale-150" />
          <FaStar className="text-primary mr-6 scale-150" />
          <FaStar className="text-primary mr-6 scale-150" />
          <FaRegStar className="text-primary scale-150" />
        </div>
      </article>
    </section>
  );
};

export default SingleProduct;
