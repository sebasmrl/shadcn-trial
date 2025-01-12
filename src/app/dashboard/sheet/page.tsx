'use client';

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react";


const SHEET_SIDES = ["top", "right", "bottom", "left"] as const; //lo vuelve inmutable


export default function SheetPage() {

  const [open, setOpen] = useState(false)

  return (
    <div className="grid grid-cols-2 gap-2">

      <Button onClick={() => setOpen(true)}>Custom Open</Button>

      <Sheet open={open} onOpenChange={(value) => setOpen(value)}>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {
        SHEET_SIDES.map((side) => {
          return (
            <Sheet key={side}>
              <SheetTrigger className="bg-sky-500 text-white rounded-md p-2">Open {side}</SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>);
        })
      }

    </div>
  );
}