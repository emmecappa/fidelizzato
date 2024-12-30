import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import Link from "next/link";

export default function Home() {
  return (
<>

      <Link href={'/card'} >
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <small className="text-default-500 font-bold">Your Artifact Card</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://www.cibotoday.it/~media/original-hi/10784967721303/la-caffetteria-artifact-a-torino.jpg"
          width={270}
        />
      </CardBody>
    </Card></Link>
       <Link href={'/manager'} >
      <Button 
      className="bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg mt-4"
      radius="full"
      variant="shadow">Manager section</Button></Link>
</>  
  );
}
