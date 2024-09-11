import React, { useState } from "react";

type Props = {
  placeholder?: string;
  onSearch: (query: string) => void;
};

const Search = ({ placeholder = "Search...", onSearch }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex 
                items-center"
    >
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder={placeholder}
        className="border border-gray-300 
                p-2 
                rounded"
      />
      <button
        type="submit"
        className="ml-2 
                px-4 
                py-2 
                bg-blue-500 
                text-white 
                rounded"
      >
        Buscar
      </button>
    </form>
  );
};

export default Search;
