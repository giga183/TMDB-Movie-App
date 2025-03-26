import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonClasses =
    "text-gray font-bold text-sm px-2 py-1 border-2 border-gray-100 hover:gray-100 rounded-lg cursor-pointer";

  const buttons = (
    <>
      <Link to="./home">
        <button className={buttonClasses}>Home</button>
      </Link>
      <Link to="./upcoming">
        <button className={buttonClasses}>Upcoming Movies</button>
      </Link>
      <Link to="./top-rated">
        <button className={buttonClasses}>Top Rated Movie</button>
      </Link>
      <Link to="./contact">
        <button className={buttonClasses}>Contact Us</button>
      </Link>
    </>
  );

  return (
    <nav className=" dark:bg-gray-800 text-white w-full sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-row w-full justify-between">
            <div className="text-xl font-bold">
              <Link to="/" className="text-amber-300">
                Best Movies
              </Link>
            </div>
            <div className="hidden md:block ">
              <div className="flex ml-10 items-baseline space-x-2">
                {buttons}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              type="button"
              className="fill-gray-400 w-8 h-8"
            >
              <img src="./burger-menu.svg" alt="Burger Icon" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2">
          {buttons}
        </div>
      )}
    </nav>
  );
};

export default Header;
