import Image from "next/image";
import logo from "../../../public/logo.svg";
import Link from "next/link";
const SignIn = () => {
  return (
    <div className="w-full h-[450px] py-8 text-white flex flex-col justify-evenly items-center bg-primary">
      <h2 className="text-4xl">
        <b>Login</b>
        <span> or </span>
        <b>SignUp</b>{" "}
      </h2>
      <div className=" pr-4 lg:pr-16">
        <span className="relative left-20 lg:left-40 h-16 pr-4 text-3xl">
          +91 |
        </span>
        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-60 lg:w-[500px] h-16 text-xl lg:text-3xl pl-20 lg:pl-48 border-white outline-none bg-transparent border-2 placeholder:text-white "
        />
      </div>
      <div className="text-2xl">
        By continuing, I agree to the{" "}
        <Link href="/" className="font-bold">
          Terms of Use & Privacy Policy
        </Link>
      </div>
      <button
        type="button"
        className="bg-[#CDB900] w-60 lg:w-[500px] h-16 text-xl lg:text-3xl font-bold"
      >
        CONTINUE
      </button>
      <div className="text-2xl">
        Have trouble logging in?
        <Link href="/" className="font-bold">
          Get help
        </Link>
      </div>
      <Image src={logo} alt="Logo" className="sideLogo" />
    </div>
  );
};

export default SignIn;
