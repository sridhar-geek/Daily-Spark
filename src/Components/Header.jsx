
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <>
      {/*  background styles for header */}
      <header className="bg-glass [backdrop-filter:blur(30px)] rounded-3xl mt-5 px-4 md:px-1 mx-5 py-5">
        {/* For All header items */}
        <div className="flex justify-between items-center px-4">
          {/* for logo and header */}
          <div className="flex gap-4 items-center">
            <img
              src="/logo.jpg"
              alt="logo"
              className="cursor-pointer w-16  rounded-3xl"
            />
            <h3 className="text-xl font-serif sm:block sm:text-2xl lg:text-3xl  text-primary font-extrabold select-none">
              Daily Sparks
            </h3>
          </div>
          <div className="gap-6 lg:gap-16 hidden md:flex ">
            <div className="nav">About</div>
            <div className="nav">Services</div>
            <div className="nav">News Letters</div>
          </div>
          <div className="flex items-center gap-1 outline rounded-3xl px-4 py-2 hover:bg-primary hover:text-white transform duration-500 delay-100  ">
            <button className="cursor-pointer">Login</button>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
