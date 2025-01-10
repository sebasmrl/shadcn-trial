import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CardPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {
        '123456789'.split('').map((char) => (<Card key={`card_${char}`}>
          <CardHeader>
            <CardTitle>Card Title {char}</CardTitle>
            <CardDescription>Card Description {char}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content {char}</p>
          </CardContent>
          <CardFooter className="flex justify-evenly">
            <Button variant={"ghost"}>Info</Button>
            <Button>Más</Button>
          </CardFooter>
        </Card>))
      }

<Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
    </div>
  );
}