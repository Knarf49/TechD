'use client'

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi
} from "@/components/ui/carousel"
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect,useState } from "react";

export default function HeroSection() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);
  
  const bannerItems =[
    {
      'id':1,
      'thumbnail': '/playstation_image.png',
      'header': 'Hurry up only few lefts',
      'content': 'Next-Level Gaming Starts 5 Today!',
    },
    {
      'id':2,
      'thumbnail': '/BEProduction.png',
      'header': 'Limited Time Offer 30% off',
      'content': 'Experience Pure Sound Your Perfect Headphones Awaits!',
    },
    {
      'id':3,
      'thumbnail': '/macbookAir.png',
      'header': 'Exclusive Deal 40% off',
      'content': 'Power Meets Elegance Apple MacBook Pro is Here for you!',
    },
  ]

  // CarouselApi
  useEffect(() => {
    if (!carouselApi) return;

    const updateCarouselState = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
      setTotalItems(carouselApi.scrollSnapList().length);
    };

    updateCarouselState();

    carouselApi.on("select", updateCarouselState);

    return () => {
      carouselApi.off("select", updateCarouselState); // Clean up on unmount
    };
  }, [carouselApi]);

  const scrollToIndex = (index: number) => {
    carouselApi?.scrollTo(index);
  };

  return (
    <section className="px-5 py-8 relative">
      {/* {JSON.stringify(product)} */}
      <Carousel
        setApi={setCarouselApi}
        className="w-full mx-auto max-w-7xl h-fit max-h-[500px] z-10 border bg-accent rounded-lg py-6 px-4"
        
      >
        <CarouselContent>
          {bannerItems.map((banner) => (
            <CarouselItem key={banner.id}>
              <div className="flex flex-wrap-reverse md:flex-nowrap items-center justify-center">
                <div className="ml-8">
                  <p className="text-primary mb-1">{banner.header}</p>
                  <h1 className="text-3xl font-bold">{banner.content}</h1>
                  <div className="mt-6">
                    <Button className="rounded-full">Shop Now</Button>
                    <Button variant='link' className="group">Explore Deals <span className="group-hover:translate-x-1.5 transition-all duration-300"><ArrowRight /></span></Button>
                  </div>
                </div>
                <div className="relative w-[300px] h-[200px]">
                  <Image 
                    fill
                    src={banner.thumbnail} 
                    alt={banner.header} 
                    className="object-contain"
                  />
                </div>
              </div>
              
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Navigation Dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 z-20">
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </section>
  )
}
