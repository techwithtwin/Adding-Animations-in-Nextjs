import Image from "next/image";
import React from "react";

interface Props {
  item: number;
}

const Card = ({ item }: Props) => {
  return (
    <div className="h-[30rem] overflow-hidden rounded-xl shadow">
      <Image
        className="w-full h-full object-cover"
        src={`https://randomfox.ca/images/${item}.jpg`}
        width={340}
        height={340}
        alt="random fox image"
      />
    </div>
  );
};

export default Card;
