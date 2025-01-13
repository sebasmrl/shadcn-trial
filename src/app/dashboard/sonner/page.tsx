'use client';

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function SonnerPage() {
  return (
    <div className="grid grid-cols-5 gap-3">
      <Button
      variant="outline"
      onClick={() =>
        toast("Evento creado", {
          //duration:5000,
          position:'top-right',
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Aceptar",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>

    <Button
      variant="outline"
      onClick={() =>
        toast.success("Evento creado", {
          className:"bg-green-600 text-green-900",
          //duration:5000,
          position:'bottom-right',
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Cerrar",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast Success
    </Button>
    </div>
  );
}