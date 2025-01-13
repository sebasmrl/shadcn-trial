'use client';

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

export default function ToastPage() {

  const { toast } = useToast();

  return (
    <div className="grid grid-cols-5 gap-3">
      <Button onClick={()=>{
        toast({
          title: "Error de registro",
          description:'Intentalo de nuevo más tarde',
          duration:3000,
          variant:'success'
        });
      }}>
        Toast Success
      </Button>

      <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: (
            <ToastAction altText="Try again" onClick={()=>{ console.log("try again toast")}}>
              Try again
            </ToastAction>),
        })
      }}
    >
      Show Toast
    </Button>


    <Button
      variant="outline"
      onClick={() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }}
    >
      Show Toast
    </Button>


    </div>
  );
}