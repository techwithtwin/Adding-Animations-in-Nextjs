import Image from "next/image";
import React from "react";

interface Props {
  imgUrl: string;
}

const Card = ({ imgUrl }: Props) => {
  return (
    <div className="h-[30rem] overflow-hidden rounded-xl shadow">
      <Image
        className="w-full h-full object-cover"
        src={imgUrl}
        width={340}
        height={340}
        alt="random fox image"
      />
    </div>
  );
};

export default Card;
