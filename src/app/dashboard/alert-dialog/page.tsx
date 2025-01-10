'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AlertDialogPage() {

  const [open, setOpen] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-2">


      <AlertDialog 
        open={open}
        //onOpenChange={(open)=>console.log(`Estado de abierto o cerrado ${open}`)}
        onOpenChange={ (openValue)=> setOpen(openValue) }
      >

        <AlertDialogTrigger asChild className="">
          <Button variant="outline" className="">Show Dialog</Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={ ()=> console.log("Cancel action")}>Cancel</AlertDialogCancel>
            <AlertDialogAction  onClick={ ()=> console.log("Continue action")}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>

      </AlertDialog>

      {/* 2 forma con estado personalizado */}
      <Button onClick={ ()=>setOpen(true)}>Open Dialog Manually</Button>

    </div>
  );
}