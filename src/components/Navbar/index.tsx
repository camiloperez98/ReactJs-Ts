// import React from "react";
import Menu from "../Menu/index";
import Icon from "../Icon/index";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import  SearchBar from "../Search/index";
import IconButton from "../IconButton/index";

type Props = {
  title: string;
  links: { name: string; href: string }[];
};

const Navbar = ({ title, links }: Props) => {
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
        <button
          className="ml-24
                    hover:text-blue-500 
                    transition-colors duration-300
                    hover:bg-neutral-200
                    p-2
                    rounded-full"
        >
          <IconButton icon={<IoSearch />} size="text-2xl">
            <SearchBar onSearch={()=> console.log('buscando')} placeholder="Buscar cliente"/>
          </IconButton>
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
