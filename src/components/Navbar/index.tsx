import React from "react";
import Menu from "../Menu/index";
import Icon from "../Icon/index";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

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
                py-6
                drop-shadow-md 
                bg-gradient-to-t from-white to-gray-200 
                shadow shadow-gray-500/40"
    >

      <div className="flex items-center space-x-8">

        <Menu links={links} />


        <div className="text-slate-800 text-2xl italic font-mono">
          <a href="/">{title}</a>
        </div>
      </div>

      <div className="flex items-center space-x-4">
      <Icon
          icon={faHeart}
          onClick={() => console.log("Add to favorite")}
        />
        <Icon
          icon={faShoppingCart}
          elementCount={5}
          onClick={() => console.log("Add to cart")}
        />
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
