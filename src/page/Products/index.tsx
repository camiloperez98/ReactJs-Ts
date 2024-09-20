import React, { useEffect, useState } from "react";
import Card from "../../components/Card/index";
import FilterButtons from "../../components/FilterButtons/index";
import { fetchData } from "../../apiFetch"; // Fetch reutilizable para obtener datos de la API

const categories = [
  { key: "All", label: "Todos" },
  { key: "jewelery", label: "Joyería" },
  { key: "electronics", label: "Electrónica" },
  { key: "men's clothing", label: "Ropa de Hombre" },
  { key: "women's clothing", label: "Ropa de Mujer" },
];

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

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchData<Product[]>(
          "https://fakestoreapi.com/products"
        );
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <FilterButtons
        products={products}
        productsCategory={categories}
        onFilter={setFilteredProducts}
      />
      <div
        className="flex
                      justify-between"
      >
        <div className="w-[550px]"></div>
        <div
          className="grid grid-cols-4 gap-4
                    mr-[10px]"
        >
          {filteredProducts.map((product) => (
            <Card
              onClick={(id) => console.log("Producto seleccionado:", id)}
              key={product.id}
              data={{
                id: product.id,
                title: product.title,
                category: product.category,
                image: product.image,
                price: product.price,
                description: product.description,
                rating: product.rating,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
