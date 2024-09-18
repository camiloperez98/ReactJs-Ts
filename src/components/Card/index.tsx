import React from "react";

type CardData = {
  id: number;
  title: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: {
    rate: number;
    count: number;
  };
  phone?: string;
  email?: string;
};

type Props = {
  data: CardData;
  onClick?: (id: number) => void;
};

const Card = ({ data, onClick }: Props) => {
  return (
    <div className="" onClick={() => onClick?.(data.id)}>
      {data.image && (
        <img src={data.image} alt={data.title} className="w-full h-48 object-cover rounded-md mb-4" />
      )}
      <h2>{data.title}</h2>
      {/* {data.description && <p>{data.description}</p>} */}
      {data.category && <p>{data.category}</p>}
      {data.price && <p>{data.price}</p>}
      {data.rating?.count && <p>{data.rating?.count}</p>}
      {data.rating?.rate && <p>{data.rating?.rate}</p>}
      {data.phone && <p>{data.phone}</p>}
      {data.email && <p>{data.email}</p>}
    </div>
  );
};

export default Card;
