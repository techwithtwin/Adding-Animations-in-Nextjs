import Image from "next/image";
import React from "react";

interface Props {
  animation: string;
  imgUrl: string;
  delay?: number;
}

const Card = ({ imgUrl, animation, delay = 0 }: Props) => {
  return (
    <div
      className="h-[30rem] overflow-hidden rounded-xl shadow"
      data-aos={animation}
      data-aos-delay={delay}
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
