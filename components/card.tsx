import Image from "next/image";
import React from "react";

interface Props {
  animation: string;
  imgUrl: string;
}

const Card = ({ imgUrl, animation }: Props) => {
  return (
    <div
      className="h-[30rem] overflow-hidden rounded-xl shadow"
      data-aos={animation}
    >
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
