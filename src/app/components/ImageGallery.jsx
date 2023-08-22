"use client";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const ImageGallery = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  return (
    <div className="overflow-hidden mx-auto p-9" ref={emblaRef}>
      <div className="flex">
        {props.list.map((blog, index) => {
          return (
            <div className="carousel-item w-1/3" key={index}>
              <img
                src={blog.img}
                fill="true"
                className="w-full p-2"
                alt={blog.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
