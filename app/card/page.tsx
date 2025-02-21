'use client'
import { Card, CardHeader, CardBody,CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import { ModalContent,Modal, ModalBody, ModalHeader, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { useSearchParams } from "next/navigation";

export default function CardSection() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [points,setPoints] = useState(0);
    const searchParams = useSearchParams();
    const addPoints = searchParams.get('add_points');
    useEffect(() => {
    const data = localStorage.getItem('card_points');
    if (!data) {
      localStorage.setItem('card_points','0');
    }else{
      setPoints(Number(data));
    }
    if(addPoints){
      if (data) {
        handleSetPoint(Number(addPoints))
      }else{
        localStorage.setItem('card_points','0');
        handleSetPoint(Number(addPoints))
      }
    }
  }, []);

    useEffect(() => {
      localStorage.setItem('card_points', points.toString());
    }, [points]);

    const handleSetPoint = (data: number = 7) => {
      const timestamp =  localStorage.getItem('timestamp') ? localStorage.getItem('timestamp') : localStorage.setItem('timestamp', Date.now().toString());
      if(Date.now() - Number(timestamp) > Number(60000)){
        setPoints(Number(localStorage.getItem('card_points'))+data);
        localStorage.setItem('timestamp', Date.now().toString());
      }
    }

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
    
    <Button className="mt-4" color="danger" variant="bordered" onPress={() => {onOpen();handleSetPoint();}}>
        Add points
      </Button>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Scan me please</ModalHeader>
              <ModalBody>
            <Image src="https://assets-v2.lottiefiles.com/a/ec4394a2-1151-11ee-ab60-b3dd36237565/gx2MOoN1Ep.gif"/>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Done
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
    }