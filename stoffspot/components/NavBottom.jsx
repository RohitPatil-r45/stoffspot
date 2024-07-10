import { Cart, Heart, User } from "./SVG";
import { SiHomebridge } from "react-icons/si";
import Link from "next/link";
import { useState } from "react";

const NavBottom = ({ isLogin }) => {
  const [nav, setNav] = useState({
    Home: true,
    Wishlist: false,
    Cart: false,
    User: false,
  });
  const activeClass = { color: "white", borderBotton: "2px solid white" };
  return (
    <div
      className="w-11/12 h-[50px] scrollUp  font-medium flex justify-evenly items-center fixed bottom-2 le rounded-full  bg- md:hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle farthest-corner at 10.2% 55.8%, rgba(252, 37, 103, 1) 0%, rgba(250, 38, 151, 1) 46.2%, rgba(186, 8, 181, 1) 90.1%)",
      }}
    >
      <Link
        href="/"
        className="h-full flex flex-col justify-center items-center w-20"
        style={nav.Home ? activeClass : {}}
        onClick={() =>
          setNav({ Home: true, Wishlist: false, Cart: false, User: false })
        }
      >
        <SiHomebridge />
        <span>Home</span>
      </Link>
      <Link
        href="/wishlist"
        className="h-full flex flex-col justify-center items-center w-20"
        style={nav.Wishlist ? activeClass : {}}
        onClick={() =>
          setNav({ Home: false, Wishlist: true, Cart: false, User: false })
        }
      >
        <Heart color={nav.Wishlist && "white"} />
        <span>Wishlist</span>
      </Link>
      <Link
        href="/cart"
        className="h-full flex flex-col justify-center items-center w-20"
        style={nav.Cart ? activeClass : {}}
        onClick={() =>
          setNav({ Home: false, Wishlist: false, Cart: true, User: false })
        }
      >
        <Cart color={nav.Cart && "white"} />
        <span>Cart</span>
      </Link>
      <Link
        href={isLogin ? "/user" : "/signin"}
        className="h-full flex flex-col justify-center items-center w-20"
        style={nav.User ? activeClass : {}}
        onClick={() =>
          setNav({ Home: false, Wishlist: false, Cart: false, User: true })
        }
      >
        <User color={nav.User && "white"} />
        <span>Profile</span>
      </Link>
    </div>
  );
};

export default NavBottom;
