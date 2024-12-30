'use client'
import { Card, CardHeader, CardBody,CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { useState } from "react";

export default function CardSection() {


    const [points,setPoints] = useState(12);
    return <>
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-large text-orange-500 font-bold">Your Artifact card</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://citynews-cibotoday.stgy.ovh/~media/horizontal-mid/65333812828992/artifact_-la-nuova-caffetteria-specialty-di-riccardo-alesso-a-torino.jpg"
          width={270}
        />
      </CardBody>
      <CardFooter>
      <h4 className="text-default-700 text-large font-bold">{points} points</h4>
      </CardFooter>
    </Card>
    
    <Button className="mt-4" color="danger" variant="bordered" onPress={() => setPoints(points+2)}>
        Add points
      </Button>
    </>
    }