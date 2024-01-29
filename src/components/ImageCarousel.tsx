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

export function ImageCarousel({ images, }: props) {
  return (
      <Carousel
        opts={{
          align: "start",
          loop: true,
          
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="size-96">
          {images.map((_, index) => (
            <CarouselItem key={index}>
              <Card className="border-0">
                <CardContent className="flex items-center justify-center p-0">
                  <img
                    className="aspect-square rounded-lg object-cover"
                    src={_.src}
                  ></img>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
  );
}
