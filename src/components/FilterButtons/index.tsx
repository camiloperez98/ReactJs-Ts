import React from "react";

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
  const filterProduct = (category: string) => {
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
    <div className="flex 
                    justify-between 
                    pb-4
                    pl-[50px]
                    pr-[50px]">
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
          key={itemCategory.key}
          onClick={() => filterProduct(itemCategory.key)}
        >
          {itemCategory.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
