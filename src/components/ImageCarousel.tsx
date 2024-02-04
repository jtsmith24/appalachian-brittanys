import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import type { ImageMetadata } from "astro";

interface props {
  images: ImageMetadata[];
  autoPlay?: boolean;
}

export function ImageCarousel({ images }: props) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 10000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((_, index) => (
          <CarouselItem key={index}>
            <img
              className="aspect-square rounded-lg object-cover self-center"
              src={_.src}
            ></img>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
