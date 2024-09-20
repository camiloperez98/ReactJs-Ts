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
};

type Props = {
  data: CardData;
  onClick?: (id: number) => void;
};

const Card = ({ data, onClick }: Props) => {
  return (
    <div
      className="border-[1px]
                  mt-4
                  w-[250px]
                  mr-[1px]
                  -mb-[16px]
                  border-slate-200
                  p-4
                  rounded-2xl
                  flex
                  flex-col
                  items-center
                  justify-center
                  hover:shadow-lg
                  transition-all
                  bg-white"
      onClick={() => onClick?.(data.id)}
    >
      {data.image && (
        <img
          src={data.image}
          alt={data.title}
          className="w-36 
                    h-36
                    pb-4"
        />
      )}
      <h2
        className="text-sm 
                  font-mono
                  font-bold
                  text-center"
      >
        {data.title}
      </h2>
      {/* {data.category && (
        <p className="text-sm text-gray-500">{data.category}</p>
      )} */}
      {data.price && (
        <p
          className="text-xl 
                      font-mono 
                      text-green-500"
        >
          ${data.price}
        </p>
      )}
      {/* {data.rating?.rate && (
        <p
          className="text-sm 
                      text-yellow-500
                      font-mono"
        >
          {data.rating.count} Und. disponibles
        </p>
      )} */}
    </div>
  );
};

export default Card;
