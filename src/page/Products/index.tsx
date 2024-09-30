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


      <div className="flex min-h-screen   gap-3 mx-3 mb-3 ">
        <div className="w-80 bg-red-300 rounded-md">
          hola
        </div>

        <div className="w-full 
        h-full
        bg-gray-50
        border 
        rounded-md 
        grid 
        grid-cols-1 
        md:grid-cols-3 
        lg:grid-cols-4 
        lx:grid-col-4 
        gap-3 
        justify-stretch 
        px-4 py-4">
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

      {/* <div
        className="flex
                  justify-center items-center
                  mr-[20px]"
      >

        <div className="w-[280px]">
          <div className="bg-red-300 ">
            hola
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lx:grid-col-4 gap-4
                    mr-[18px] justify-center items-center"
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
      </div> */}
    </>
  );
};

export default ProductList;
