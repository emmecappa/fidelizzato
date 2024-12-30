
'use client'
import { Card, CardHeader, CardBody,CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { ModalContent,Modal, ModalBody, ModalHeader, ModalFooter, useDisclosure } from "@nextui-org/modal";

export default function Manager() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
            <Image src="https://media.istockphoto.com/id/1251071788/vector/qr-code-bar-code-black-icon-digital-technology.jpg?s=612x612&w=0&k=20&c=maw4OqMSEegAdSo8Drm9HO7i1ddddvP2YaL1UuWbRig="/>
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



