"use client";
import Image from "next/image";
import { Image as ImageType } from "@/types";
import { useEffect, useState } from "react";
interface GalleryProps {
  images: ImageType[];
}
const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [isMounted, setIsMouted] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIsMouted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <div className="mx-auto flex-col-reverse w-full">
      <div className="aspect-square w-full">
        <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
          <Image
            src={images[index].url}
            alt="Image"
            fill
            className="object-cover absolute w-full h-full "
          />
        </div>
      </div>
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <div className="grid grid-cols-4 gap-6">
          {images.map((image, ind) => (
            <div
              className={`${
                ind == index ? "border-black" : "border-transparent"
              } aspect-square relative h-full w-full sm:rounded-lg overflow-hidden  border-2 `}
              key={image.id}
              onClick={() => setIndex(ind)}
            >
              <Image
                src={images[ind].url}
                alt="Image"
                fill
                className="object-cover absolute w-full h-full p-[2px]  sm:rounded-lg "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
