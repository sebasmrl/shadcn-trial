import { Button } from "@/components/ui/button"

export default function ButtonPage() {
    return <div className="grid grid-cols-5 gap-2 ">
      <Button>Button</Button>
      <Button variant={"destructive"}>destructive</Button>
      <Button variant={"ghost"}>ghost</Button>
      <Button variant={"link"}>link</Button>
      <Button variant={"outline"}>outline</Button>
      <Button variant={"secondary"}>secondary</Button>
      <Button disabled variant={"secondary"}>secondary disabld</Button>
    </div>
}
