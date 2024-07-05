import Image from "next/image";
import logo from "../public/logo.svg";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src={logo} alt="Logo" />
          <p>
            One step toward having a better and healthy environment for the
            future. Stop fast fashion and move toward sustainable fashion.
          </p>
          <div className="flex">
            <input
              type="email"
              className="placeholder-white"
              placeholder="your email ID"
            />
            <button type="submit" className={styles.btn}>
              Subscribe
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.links}>
            <b>Need Help?</b>
            <Link href="#">Contact Us</Link>
            <Link href="#">Track Order</Link>
            <Link href="#">Return & Refund</Link>
            <Link href="#">FAQ</Link>
            <Link href="#">My Account</Link>
          </div>
          <div className={styles.links}>
            <b>Our Story</b>
            <Link href="#">About Us</Link>
            <Link href="#">For the Earth</Link>
            <Link href="#">Our Blogs</Link>
          </div>
          <div className={styles.links}>
            <b>Keep in touch</b>
            <Link href="#">Email</Link>
            <Link href="#">Phone No</Link>
          </div>
          <div className={styles.links}>
            <b>Info</b>
            <Link href="#">Business Model</Link>
            <Link href="#">Trifting Store</Link>
            <Link href="#">Work with us</Link>
          </div>
        </div>
      </div>
      <p className={styles.info}>
        Copyright © {new Date().getFullYear()},stoffspot. All rights reserved.
        See our terms of use and privacy notice. Powered by NextJS
      </p>
    </footer>
  );
};

export default Footer;
