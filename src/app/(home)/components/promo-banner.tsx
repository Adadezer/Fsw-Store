import Image, { ImageProps } from "next/image";
import React from "react";

const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      src={props.src}
      width={0}
      height={0}
      className="h-auto w-full px-5"
      sizes="100vw"
      alt={alt}
    />
  );
};

export default PromoBanner;
