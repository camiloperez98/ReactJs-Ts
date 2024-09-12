import React, { useState } from "react";
import Menu from "../Menu/index";
import Icon from "../Icon/index";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

type Props = {
  title: string;
  links: { name: string; href: string }[];
};

const Navbar = ({ title, links }: Props) => {
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
                pl-24
                pr-24
                py-6
                drop-shadow-md 
                bg-gradient-to-t from-white to-gray-200 
                shadow shadow-gray-500/40"
    >
      <div
        className="flex items-center
                      justify-between"
      >
        <div
          className="flex items-center
                      justify-center
                      mt-2"
        >
          <Menu links={links} />
        </div>

        <div
          className="ml-24
                    text-slate-800 
                    text-2xl italic 
                    font-mono
                    hover:text-blue-500 
                    absolute"
        >
          <a href="/">{title}</a>
        </div>
      </div>

      <div className="flex items-center">
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
                    p-2
                    rounded-full"
        >
          <Icon size="text-2xl" icon={<IoSearch />} onClick={toogleSearch} />
        </button>

        <button
          className="ml-24
                          hover:text-blue-500 
                          transition-colors duration-300
                          hover:bg-neutral-200
                          p-2
                          rounded-full"
        >
          <Icon
            size="text-2xl"
            icon={<FaRegHeart />}
            onClick={() => console.log("Add to favorite")}
          />
        </button>

        <button
          className="ml-24
                          hover:text-blue-500 
                          transition-colors duration-300
                          hover:bg-neutral-200
                          p-2
                          rounded-full"
        >
          <Icon
            size="text-2xl"
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
                          rounded-full"
        >
          <Icon
            size="text-2xl"
            icon={<FaUserCircle />}
            onClick={() => console.log("Add to favorite")}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
