import * as Carousel from "@/components/ui/carousel";
import * as Card from "@/components/ui/card";
import Image from "next/image";
import React from 'react';

function Header() {
  return (
    <React.Fragment>
        <Carousel.Carousel className="w-full shadow-sm relative">
            <Carousel.CarouselPrevious className="left-5 z-10 size-6"/>
            <Carousel.CarouselNext className="right-5 z-10 size-6"/>
            <Carousel.CarouselContent>
            <Carousel.CarouselItem>
                <Card.Card className="bg-app-tertiary rounded-none">
                <Card.CardContent className="flex aspect-square items-center justify-center">
                    <Image
                    src={"/images/jug_1.svg"}
                    alt="jug"
                    width={300}
                    height={300}
                    loading="lazy"
                    />
                </Card.CardContent>
                </Card.Card>
            </Carousel.CarouselItem>
            <Carousel.CarouselItem>
                <Card.Card className="bg-app-tertiary rounded-none">
                <Card.CardContent className="flex aspect-square items-center justify-center">
                    <Image
                    src={"/images/jug_2.svg"}
                    alt="jug"
                    width={300}
                    height={300}
                    loading="lazy"
                    />
                </Card.CardContent>
                </Card.Card>
            </Carousel.CarouselItem>
            <Carousel.CarouselItem>
                <Card.Card className="bg-app-tertiary rounded-none">
                <Card.CardContent className="flex aspect-square items-center justify-center">
                    <Image
                    src={"/images/jug_1.svg"}
                    alt="jug"
                    width={300}
                    height={300}
                    loading="lazy"
                    />
                </Card.CardContent>
                </Card.Card>
            </Carousel.CarouselItem>
            </Carousel.CarouselContent>
        </Carousel.Carousel>

      {/* Product name */}
      <div>
        <div className="flex w-full justify-center items-center gap-2">
          <h3 className="font-semibold text-2xl tracking-widest">Glen Kettle </h3>
          <p className="tracking-widest font-thin text-xl"> -SA9015Dx Red</p>
        </div>
        <p className="text-xs font-light tracking-widest text-gray-500">Live Better!</p>
      </div>
    </React.Fragment>
  )
}


export default React.memo(Header);