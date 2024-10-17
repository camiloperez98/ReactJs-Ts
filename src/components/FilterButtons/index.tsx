import React, { useState } from "react";

type Product = {
  id: number;
  title: string;
  category: string;
  image?: string;
  price?: number;
  description?: string;
  stock?: number;
  rating?: {
    rate: number;
    count: number;
  };
};

type Props = {
  products: Product[];
  productsCategory: { key: string; label: string }[];
  onFilter: (filteredProducts: Product[]) => void;
};

const FilterButtons = ({ products, productsCategory, onFilter }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProduct = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      onFilter(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      onFilter(filteredProducts);
    }
  };

  return (
    <div
      className="flex 
                    justify-between 
                    pb-4
                    pl-[40px]
                    pr-[40px]
                    mt-8"
    >
      {productsCategory.map((itemCategory) => (
        <button
          key={itemCategory.key}
          onClick={() => filterProduct(itemCategory.key)}
          className={`bg-gray-100 
                    text-black 
                    font-mono 
                    py-1 
                    px-4 
                    border-[1px] 
                    border-gray-300 
                    transition-all 
                    duration-300
                    rounded-full
                    w-[140px] 
            ${
              selectedCategory === itemCategory.key
                ? "bg-amber-400 text-gray-600"
                : "bg-zinc-100 hover:bg-amber-400 text-black hover:text-gray-600"
            }`}
        >
          {itemCategory.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
