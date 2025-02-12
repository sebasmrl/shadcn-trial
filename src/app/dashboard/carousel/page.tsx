'use client';

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
//import Autoplay from 'embla-carousel-autoplay';

export default function CarouselPage() {
  return (
    <div className="w-full flex justify-center">

     <Carousel 
        autoplay={3000}
        //plugins={[Autoplay({ delay:1000})]}
        opts={{
          loop:true,
        }}
        className="w-full max-w-xs" >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex justify-center "/>
      <CarouselNext className="hidden sm:flex justify-center"/>
    </Carousel>

    </div>
  );
}