
'use client'
import { Card, CardHeader, CardBody,CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { ModalContent,Modal, ModalBody, ModalHeader, ModalFooter, useDisclosure } from "@nextui-org/modal";
import QRCode from "qrcode";
import { useEffect, useState } from "react";

export default function Manager() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [qrCode, setQrCode] = useState("");
    useEffect(() => {
      const controller = new AbortController(); // Create an AbortController.
      const { signal } = controller;
  
      const generateQRCode = async () => {
        try {
          const url = await QRCode.toDataURL("http://192.168.186.39:3000/fidelizzato/card?add_points=true",);
          setQrCode(url);
        } catch (error) {
            console.error("Error generating QR code:", error);
        }
      };
  
      generateQRCode();
  
      return () => {
        controller.abort();
      };
    }, []);
    return <>
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://lh6.googleusercontent.com/kzmA2qA6Lhq11aWrB0M340ea9I__CzrEpZeQUSNQYd3WU7S04rOhOWwHgTlSWPVMYHtkf-ATXHqR7lQc14n6XXZW9lRjANcAg6JpNNYQzKRVD8lO"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Goodmorning Riccardo!</p>
          <p className="text-small text-default-500">Generate a new QR Code for your extraordinary client</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Input label="How many points?" type="number" />
        <Button onPress={onOpen} variant="flat" className="w-48 mt-4 bg-gradient-to-tr from-yellow-500 to-orange-500">Generate QR Code</Button>
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
              {qrCode ? (
                <Image src={qrCode} alt="QR Code" />
              ) : (
                <p>Generating QR code...</p>
              )}
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
      </CardBody>
      <CardFooter>
      </CardFooter>
    </Card>
    </>
}



