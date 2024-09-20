import { useEffect, useState } from "react";
import Card from "../../components/Card/index";
import FilterButtons from "../../components/FilterButtons/index";
import { fetchData } from "../../apiFetch"; // Fetch reutilizable para obtener datos de la API

const categories = [
  { key: "All", label: "Todos" },
  { key: "jewelery", label: "Joyas" },
  { key: "electronics", label: "Tecnología" },
  { key: "women's clothing", label: "Moda Mujer" },
  { key: "men's clothing", label: "Moda Hombre" },
  
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
    <>
      <FilterButtons
        products={products}
        productsCategory={categories}
        onFilter={setFilteredProducts}
      />
      <div
        className="flex
                  justify-between
                  mr-[20px]"
      >
        <div className="w-[280px]"></div>

        <div className="grid grid-cols-5 gap-4
                    mr-[18px]"
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
    </>
  );
};

export default ProductList;
