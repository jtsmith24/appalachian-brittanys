import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { ImageMetadata } from "astro";

interface props {
  images: ImageMetadata[];
}

export function ImageCarousel({ images }: props) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-screen-2xl"
    >
      <CarouselContent>
        {images.map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img className="aspect-square object-cover" src={_.src}></img>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
