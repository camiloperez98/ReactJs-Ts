import React, { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
};

type Props = {
  products: Product[];
  productsCategory: string[];
};

const FilterButtons = ({ products, productsCategory }: Props) => {
  const [filterProducts, setFilterProducts] = useState(products);

  const filterProduct = (category: string) => {
    if (category === "Todos") {
      setFilterProducts(products);
    } else {
      setFilterProducts(
        products.filter((product) => product.category === category)
      );
    }
  };
  return (
    <>
      <div
        className="flex justify-between 
                      pb-4"
      >
        {productsCategory.map((itemCategory) => (
          <button
            className="bg-gray-100 
                      hover:bg-gray-300   
                      text-black 
                      font-mono
                      hover:text-gray-700
                      py-1 
                      px-4
                      border-[1px]           
                      border-gray-300    
                      transition-all      
                      duration-300
                      rounded-full"
            key={itemCategory}
            onClick={() => filterProduct(itemCategory)}
          >
            {itemCategory}
          </button>
        ))}
      </div>
      <ul>
        {filterProducts.map((product) => (
          <li className="font-mono" key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
};

export default FilterButtons;
