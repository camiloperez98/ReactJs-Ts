import React from "react";
import Menu from "../Menu/index";
import Icon from "../Icon/index";
import {
  faShoppingCart,
  faHeart,
  faUserAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

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
      <div className="flex items-center">
        <Menu links={links} />

        <div
          className="ml-24
                    text-slate-800 
                    text-2xl italic 
                    font-mono
                    absolute"
        >
          <a href="/">{title}</a>
        </div>
      </div>

      <div className="flex items-center">
        <button
          className="ml-24
                    hover:text-blue-500 
                    transition-colors duration-300"
        >
          <Icon
            icon={faSearch}
            onClick={() => console.log("Add to favorite")}
          />
        </button>

        <button
          className="ml-24
                          hover:text-blue-500 
                          transition-colors duration-300"
        >
          <Icon
            icon={faHeart}
            elementCount={1}
            onClick={() => console.log("Add to favorite")}
          />
        </button>

        <button
          className="ml-24
                          hover:text-blue-500 
                          transition-colors duration-300"
        >
          <Icon
            icon={faShoppingCart}
            elementCount={1}
            onClick={() => console.log("Add to cart")}
          />
        </button>

        <button
          className="ml-24
                          hover:text-blue-500 
                          transition-colors duration-300"
        >
          <Icon
            icon={faUserAlt}
            onClick={() => console.log("Add to favorite")}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

// import React from "react";
// import Menu from "../Menu/index";
// import Icon from "../Icon/index";
// import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

// type Props = {
//   title: string;
//   links: { name: string; href: string }[];
// };

// const Navbar = ({ title, links }: Props) => {
//   return (
//     <>
//       <nav
//         className="relative
//                 flex justify-start
//                 items-center
//                 px-12
//                 pl-24
//                 py-6
//                 drop-shadow-md
//                 bg-gradient-to-t from-white to-gray-200
//                 shadow shadow-gray-500/40"
//       >
//         <div className="">
//           <Menu links={links} />
//         </div>
//         <div
//           className="ml-24
//                   text-slate-800
//                   text-2xl italic
//                   font-mono

//                   absolute"
//         >
//           <a href="/">{title}</a>
//         </div>
//         <div className="flex justify-end">
//           <Icon
//             icon={faShoppingCart}
//             elementCount={5}
//             onClick={() => console.log("Add to cart")}
//           />
//           <Icon icon={faHeart} onClick={() => console.log("Add to favorite")} />
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
