"use client";
import styles from "../styles/Nav.module.css";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { PiBag } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import Link from "next/link";
import { useState } from "react";
const Nav = () => {
  const [menu, setMenu] = useState({
    men: false,
    women: false,
    kids: false,
    sports: false,
    art: false,
    coupons: false,
  });
  return (
    <nav className={styles.container}>
      <div className={styles.upperNav}>
        <Link href="/about">ABOUT</Link>
        <Link href="/" className={styles.brandName}>
          STOFFSPOT
        </Link>
        <div className={styles.icons}>
          <Link href="/user">
            <FaRegUser />
          </Link>
          <Link href="/wishlist">
            <FaRegHeart />
          </Link>
          <Link href="/cart">
            <PiBag />
          </Link>
        </div>
      </div>
      <div className={styles.lowerNav}>
        <div className={styles.menus}>
          <span
            className={menu.men ? `${styles.active}` : ""}
            onClick={() =>
              setMenu({
                men: true,
                women: false,
                kids: false,
                sports: false,
                art: false,
                coupons: false,
              })
            }
          >
            MENS
          </span>
          <span
            className={menu.women ? `${styles.active}` : ""}
            onClick={() =>
              setMenu({
                men: false,
                women: true,
                kids: false,
                sports: false,
                art: false,
                coupons: false,
              })
            }
          >
            WOMENS
          </span>
          <span
            className={menu.kids ? `${styles.active}` : ""}
            onClick={() =>
              setMenu({
                men: false,
                women: false,
                kids: true,
                sports: false,
                art: false,
                coupons: false,
              })
            }
          >
            KIDS
          </span>
          <span
            className={menu.art ? `${styles.active}` : ""}
            onClick={() =>
              setMenu({
                men: false,
                women: false,
                kids: false,
                sports: false,
                art: true,
                coupons: false,
              })
            }
          >
            ART & CRAFT
          </span>
          <span
            className={menu.coupons ? `${styles.active}` : ""}
            onClick={() =>
              setMenu({
                men: false,
                women: false,
                kids: false,
                sports: false,
                art: false,
                coupons: true,
              })
            }
          >
            COUPONS
          </span>
        </div>
        <div className={styles.search}>
          <GoSearch />
          <input type="search" placeholder="SEARCH" />
        </div>
      </div>
      {menu.men && (
        <div className={styles.menuDetails}>
          <div className="flex">
            <div className={styles.links}>
              <b className="text-orange-500">MENS</b>

              <Link href="#">Kurtas & Suits</Link>
              <Link href="#">Kurtis, Tunics & Tops</Link>
              <Link href="#">Watches & Wearables</Link>
              <Link href="#">Belts, Scarves & More</Link>
              <Link href="#">Sarees</Link>
              <Link href="#">Ethnic Wear</Link>
              <Link href="#">Leggings, Salwars & Churidars</Link>
              <Link href="#">Skirts & Palazzos</Link>
              <Link href="#">Dress Materials</Link>
              <Link href="#">Lehenga Cholis</Link>
              <Link href="#">Dupattas & Shawls</Link>
              <Link href="#">Jackets</Link>
            </div>
            <div className={styles.links}>
              <b className="text-[#DAC400]"> Western Wear</b>

              <Link href="#">Dresses</Link>
              <Link href="#">Tops</Link>
              <Link href="#">Tshirts</Link>
              <Link href="#">Jeans</Link>
              <Link href="#">Trousers & Capris</Link>
              <Link href="#">Shorts & Skirts</Link>
              <Link href="#">Co-ords</Link>
              <Link href="#">Playsuits</Link>
              <Link href="#">Jumpsuits</Link>
              <Link href="#">Shrugs</Link>
              <Link href="#">Sweaters & Sweatshirts</Link>
              <Link href="#">Jackets & Coats</Link>
              <Link href="#">Blazers & Waistcoats</Link>
            </div>
          </div>
        </div>
      )}
      {menu.women && (
        <div className={styles.menuDetails}>
          <div className="flex">
            <div className={styles.links}>
              <b className="text-[#DAC400]">Indian & Fusion Wear</b>

              <Link href="#">Kurtas & Suits</Link>
              <Link href="#">Kurtis, Tunics & Tops</Link>
              <Link href="#">Watches & Wearables</Link>
              <Link href="#">Belts, Scarves & More</Link>
              <Link href="#">Sarees</Link>
              <Link href="#">Ethnic Wear</Link>
              <Link href="#">Leggings, Salwars & Churidars</Link>
              <Link href="#">Skirts & Palazzos</Link>
              <Link href="#">Dress Materials</Link>
              <Link href="#">Lehenga Cholis</Link>
              <Link href="#">Dupattas & Shawls</Link>
              <Link href="#">Jackets</Link>
            </div>
            <div className={styles.links}>
              <b className="text-[#DAC400]"> Western Wear</b>

              <Link href="#">Dresses</Link>
              <Link href="#">Tops</Link>
              <Link href="#">Tshirts</Link>
              <Link href="#">Jeans</Link>
              <Link href="#">Trousers & Capris</Link>
              <Link href="#">Shorts & Skirts</Link>
              <Link href="#">Co-ords</Link>
              <Link href="#">Playsuits</Link>
              <Link href="#">Jumpsuits</Link>
              <Link href="#">Shrugs</Link>
              <Link href="#">Sweaters & Sweatshirts</Link>
              <Link href="#">Jackets & Coats</Link>
              <Link href="#">Blazers & Waistcoats</Link>
            </div>
          </div>
        </div>
      )}
      {menu.kids && (
        <div className={styles.menuDetails}>
          <div className="flex">
            <div className={styles.links}>
              <b className="text-green-500">Kids</b>

              <Link href="#">Kurtas & Suits</Link>
              <Link href="#">Kurtis, Tunics & Tops</Link>
              <Link href="#">Watches & Wearables</Link>
              <Link href="#">Belts, Scarves & More</Link>
              <Link href="#">Sarees</Link>
              <Link href="#">Ethnic Wear</Link>
              <Link href="#">Leggings, Salwars & Churidars</Link>
              <Link href="#">Skirts & Palazzos</Link>
              <Link href="#">Dress Materials</Link>
              <Link href="#">Lehenga Cholis</Link>
              <Link href="#">Dupattas & Shawls</Link>
              <Link href="#">Jackets</Link>
            </div>
            <div className={styles.links}>
              <b className="text-[#DAC400]"> Western Wear</b>

              <Link href="#">Dresses</Link>
              <Link href="#">Tops</Link>
              <Link href="#">Tshirts</Link>
              <Link href="#">Jeans</Link>
              <Link href="#">Trousers & Capris</Link>
              <Link href="#">Shorts & Skirts</Link>
              <Link href="#">Co-ords</Link>
              <Link href="#">Playsuits</Link>
              <Link href="#">Jumpsuits</Link>
              <Link href="#">Shrugs</Link>
              <Link href="#">Sweaters & Sweatshirts</Link>
              <Link href="#">Jackets & Coats</Link>
              <Link href="#">Blazers & Waistcoats</Link>
            </div>
          </div>
        </div>
      )}
      {menu.sports && (
        <div className={styles.menuDetails}>
          <div className="flex">
            <div className={styles.links}>
              <b className="text-purple-500">Sports</b>

              <Link href="#">Kurtas & Suits</Link>
              <Link href="#">Kurtis, Tunics & Tops</Link>
              <Link href="#">Watches & Wearables</Link>
              <Link href="#">Belts, Scarves & More</Link>
              <Link href="#">Sarees</Link>
              <Link href="#">Ethnic Wear</Link>
              <Link href="#">Leggings, Salwars & Churidars</Link>
              <Link href="#">Skirts & Palazzos</Link>
              <Link href="#">Dress Materials</Link>
              <Link href="#">Lehenga Cholis</Link>
              <Link href="#">Dupattas & Shawls</Link>
              <Link href="#">Jackets</Link>
            </div>
            <div className={styles.links}>
              <b className="text-[#DAC400]"> Western Wear</b>

              <Link href="#">Dresses</Link>
              <Link href="#">Tops</Link>
              <Link href="#">Tshirts</Link>
              <Link href="#">Jeans</Link>
              <Link href="#">Trousers & Capris</Link>
              <Link href="#">Shorts & Skirts</Link>
              <Link href="#">Co-ords</Link>
              <Link href="#">Playsuits</Link>
              <Link href="#">Jumpsuits</Link>
              <Link href="#">Shrugs</Link>
              <Link href="#">Sweaters & Sweatshirts</Link>
              <Link href="#">Jackets & Coats</Link>
              <Link href="#">Blazers & Waistcoats</Link>
            </div>
          </div>
        </div>
      )}
      {menu.art && (
        <div className={styles.menuDetails}>
          <div className="flex">
            <div className={styles.links}>
              <b className="text-blue-500">ART</b>

              <Link href="#">Kurtas & Suits</Link>
              <Link href="#">Kurtis, Tunics & Tops</Link>
              <Link href="#">Watches & Wearables</Link>
              <Link href="#">Belts, Scarves & More</Link>
              <Link href="#">Sarees</Link>
              <Link href="#">Ethnic Wear</Link>
              <Link href="#">Leggings, Salwars & Churidars</Link>
              <Link href="#">Skirts & Palazzos</Link>
              <Link href="#">Dress Materials</Link>
              <Link href="#">Lehenga Cholis</Link>
              <Link href="#">Dupattas & Shawls</Link>
              <Link href="#">Jackets</Link>
            </div>
            <div className={styles.links}>
              <b className="text-[#DAC400]"> Western Wear</b>

              <Link href="#">Dresses</Link>
              <Link href="#">Tops</Link>
              <Link href="#">Tshirts</Link>
              <Link href="#">Jeans</Link>
              <Link href="#">Trousers & Capris</Link>
              <Link href="#">Shorts & Skirts</Link>
              <Link href="#">Co-ords</Link>
              <Link href="#">Playsuits</Link>
              <Link href="#">Jumpsuits</Link>
              <Link href="#">Shrugs</Link>
              <Link href="#">Sweaters & Sweatshirts</Link>
              <Link href="#">Jackets & Coats</Link>
              <Link href="#">Blazers & Waistcoats</Link>
            </div>
          </div>
        </div>
      )}
      {menu.coupons && (
        <div className={styles.menuDetails}>
          <div className="flex">
            <div className={styles.links}>
              <b className="text-red-500">Coupons</b>

              <Link href="#">Kurtas & Suits</Link>
              <Link href="#">Kurtis, Tunics & Tops</Link>
              <Link href="#">Watches & Wearables</Link>
              <Link href="#">Belts, Scarves & More</Link>
              <Link href="#">Sarees</Link>
              <Link href="#">Ethnic Wear</Link>
              <Link href="#">Leggings, Salwars & Churidars</Link>
              <Link href="#">Skirts & Palazzos</Link>
              <Link href="#">Dress Materials</Link>
              <Link href="#">Lehenga Cholis</Link>
              <Link href="#">Dupattas & Shawls</Link>
              <Link href="#">Jackets</Link>
            </div>
            <div className={styles.links}>
              <b className="text-[#DAC400]"> Western Wear</b>

              <Link href="#">Dresses</Link>
              <Link href="#">Tops</Link>
              <Link href="#">Tshirts</Link>
              <Link href="#">Jeans</Link>
              <Link href="#">Trousers & Capris</Link>
              <Link href="#">Shorts & Skirts</Link>
              <Link href="#">Co-ords</Link>
              <Link href="#">Playsuits</Link>
              <Link href="#">Jumpsuits</Link>
              <Link href="#">Shrugs</Link>
              <Link href="#">Sweaters & Sweatshirts</Link>
              <Link href="#">Jackets & Coats</Link>
              <Link href="#">Blazers & Waistcoats</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
