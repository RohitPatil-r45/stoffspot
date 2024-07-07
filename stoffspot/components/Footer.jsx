import Image from "next/image";
import logo from "../public/logo.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full h-[425px] bg-[#edd81c] text-xs md:text-sm xl:text-xl">
      <div className="w-full h-[85%]  px-4 py-4 flex md:px-8 md:py-8">
        <div className="w-1/2 h-[80%] flex flex-col justify-around items-start">
          <Image src={logo} alt="Logo" />
          <p>
            One step toward having a better and healthy environment for the
            future. Stop fast fashion and move toward sustainable fashion.
          </p>
          <div className="flex">
            <input
              type="email"
              className="placeholder-white w-50 md:w-64 xl:w-96"
              placeholder="your email ID"
            />
            <button
              type="submit"
              className="relative right-14 md:right-16 xl:right-24"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-wrap justify-evenly items-start">
          <div className="links ">
            <b>Need Help?</b>
            <Link href="#" className="mt-2">
              Contact Us
            </Link>
            <Link href="#" className="mt-2">
              Track Order
            </Link>
            <Link href="#" className="mt-2">
              Return & Refund
            </Link>
            <Link href="#" className="mt-2">
              FAQ
            </Link>
            <Link href="#" className="mt-2">
              My Account
            </Link>
          </div>
          <div className="links ">
            <b>Our Story</b>
            <Link href="#" className="mt-2">
              About Us
            </Link>
            <Link href="#" className="mt-2">
              For the Earth
            </Link>
            <Link href="#" className="mt-2">
              Our Blogs
            </Link>
          </div>
          <div className="links ">
            <b>Keep in touch</b>
            <Link href="#" className="mt-2">
              Email
            </Link>
            <Link href="#" className="mt-2">
              Phone No
            </Link>
          </div>
          <div className="links ">
            <b>Info</b>
            <Link href="#" className="mt-2">
              Business Model
            </Link>
            <Link href="#" className="mt-2">
              Trifting Store
            </Link>
            <Link href="#" className="mt-2">
              Work with us
            </Link>
          </div>
        </div>
      </div>
      <p className="w-full text-pretty text-center">
        Copyright © {new Date().getFullYear()},stoffspot. All rights reserved.
        See our terms of use and privacy notice. Powered by NextJS
      </p>
    </footer>
  );
};

export default Footer;
