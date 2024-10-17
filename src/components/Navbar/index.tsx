import React, { useState } from "react";
import Icon from "../Icon/index";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toogleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // const handleSearchSubmit = () => {
  //   console.log("Search query: ", searchQuery);
  // };

  return (
    <nav
      className="relative
                flex justify-between
                items-center
                px-12
                pl-[33px]
                pr-[33px]
                py-[5px]
                drop-shadow-md 
                bg-gradient-to-t from-white to-gray-200 
                shadow shadow-gray-500/40
                "
    >
      <div
        className="
                    text-gray-700 
                    text-2xl italic 
                    font-mono
                    hover:text-blue-500 
                    "
      >
        <Link to="/">
          <img className="h-[60px]" src="/src/assets/commerce.png" alt="" />
        </Link>
      </div>

      <div
        className="flex 
                    items-center
                    justify-between
                    "
      >
        {showSearch && (
          <input
            type="text"
            className="border border-gray-300 
                      rounded-full 
                      p-2
                      w-[600px]
                      -mr-36"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Buscar..."
          />
        )}
        <button
          className="ml-24
                    hover:text-blue-500 
                    transition-colors duration-300
                    hover:bg-neutral-200
                    p-2
                    rounded-full
                    group"
        >
          <Icon
            size="text-2xl"
            color="text-gray-700 group-hover:text-black"
            icon={<IoSearch />}
            onClick={toogleSearch}
          />
        </button>

        <button
          className="ml-24
              hover:text-blue-500 
              transition-colors duration-300
              hover:bg-neutral-200
              p-2
              rounded-full
              group" 
        >
          <Icon
            size="text-2xl"
            color="text-gray-700 group-hover:text-red-500" 
            icon={<FaRegHeart />}
            onClick={() => console.log("Add to favorite")}
          />
        </button>

        <button
          className="ml-24
                          hover:text-blue-500 
                          transition-colors 
                          duration-300
                          hover:bg-neutral-200
                          p-2
                          rounded-full
                          group"
        >
          <Icon
            size="text-2xl"
            color="text-gray-700 group-hover:text-green-500"
            icon={<MdOutlineShoppingCart />}
            onClick={() => console.log("Add to cart")}
          />
        </button>

        <button
          className="ml-24
                    hover:text-blue-500 
                    transition-colors duration-300
                    hover:bg-neutral-200
                    p-2
                    rounded-full
                    group"
        >
          <Icon
            size="text-2xl"
            color="text-gray-700 group-hover:text-blue-500"
            icon={<FaUserCircle />}
            onClick={() => console.log("Add to favorite")}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
