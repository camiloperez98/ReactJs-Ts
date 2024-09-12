import { useState } from "react";
import Icon from "../Icon/index";
import { FaSearch } from "react-icons/fa";

type Props = {
  onSearch: (query: string) => void; // Función para manejar la búsqueda
};

const Search = ({ onSearch }: Props) => {
  const [query, setQuery] = useState(""); // Estado para almacenar el texto de búsqueda

  const handleSearch = () => {
    onSearch(query); // Ejecuta la función de búsqueda cuando se activa el evento
  };

  return (
    <div className="relative">
      <Icon icon={<FaSearch />} size="text-xl">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Actualiza el estado de la búsqueda
          onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Ejecuta la búsqueda al presionar Enter
          placeholder="Search..."
          className="border border-gray-300 p-1 rounded-md absolute top-full left-0 mt-2"
        />
      </Icon>
    </div>
  );
};

export default Search;
