import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";



const getData = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 2000);
  })

  return '123459'.split('');

}


export default async function SkeletonPage() {

  const data = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">

      {
        data.map(value => (
          <Card className="flex flex-col items-start gap-1 border-green-600" key={`card_${value}`}>
            <CardHeader className="flex flex-row items-center">
              <Image
                src={"https://github.com/shadcn.png"} alt={"shadcn"} width={40} height={40} className="rounded-full mr-2 w-10 h-10" />
              <div>
                <CardTitle>Sebastian Morales</CardTitle>
                <CardDescription>Ese soy yo en la descripción</CardDescription>
              </div>
            </CardHeader>
            <CardFooter className="self-stretch flex justify-end">
              <Button variant={'secondary'} >Ver Más</Button>
            </CardFooter>
          </Card>
        ))
      }
    </div>
  );
}