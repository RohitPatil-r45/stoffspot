import styles from "../styles/Nav.module.css";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { PiBag } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import Link from "next/link";
const Nav = () => {
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
          <span>MENS</span>
          <span>WOMENS</span>
          <span>KIDS</span>
          <span>ART & CRAFT</span>
          <span>COUPONS</span>
        </div>
        <div className={styles.search}>
          <GoSearch />
          <input type="search" placeholder="SEARCH" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
