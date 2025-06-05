import * as Carousel from "@/components/ui/carousel";
import * as Card from "@/components/ui/card";
import Image from "next/image";
import React from "react"

function SeeMore() {
    return (
        <div className="p-4">
            <h1 className="mx-auto w-full text-2xl mb-2 text-center">See More</h1>
            <Carousel.Carousel className="w-full relative">
                <Carousel.CarouselPrevious className="left-2 z-10 size-6" />
                <Carousel.CarouselNext className="right-2 z-10 size-6" />
                <Carousel.CarouselContent>
                    <Carousel.CarouselItem className="basis-1/3">
                        <Card.Card className="bg-app-tertiary">
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
                    <Carousel.CarouselItem className="basis-1/3">
                        <Card.Card className="bg-app-tertiary">
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
                    <Carousel.CarouselItem className="basis-1/3">
                        <Card.Card className="bg-app-tertiary">
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
                    <Carousel.CarouselItem className="basis-1/3">
                        <Card.Card className="bg-app-tertiary">
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
                    <Carousel.CarouselItem className="basis-1/3">
                        <Card.Card className="bg-app-tertiary">
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
        </div>
    )
}

export default React.memo(SeeMore)