"use client"

import { Badge } from "@/components/ui/badge";
import { Payment } from "@/data/payments.data"
import { ColumnDef, SortDirection } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, ChevronDownIcon, ChevronUpIcon, MoreHorizontal } from "lucide-react";
import { toast } from "sonner";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
/* export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}
  export const columns: ColumnDef<Payment>[] = [
 */

//Componente para las columnas si estan descendentes o ascendentes
const SortedIcon = ({isSorted}:{ isSorted:SortDirection | false})=>{
    if(isSorted === "asc") return <ChevronUpIcon />
    if(isSorted === "desc") return <ChevronDownIcon />
    return null;
}



export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "clientName",
        header: ({ column }) => {
            return (
              <Button
                className="flex w-full justify-start"
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                <span className="capitalize">client name</span>
                <SortedIcon  isSorted={column.getIsSorted()} />
              </Button>
            )   
          },//se puede devolver un fComponent
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
              <Button
                className="flex w-full justify-start"
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                <span className="capitalize">Status</span>
                <SortedIcon  isSorted={column.getIsSorted()} />
              </Button>
            )   
          },//se puede devolver un fComponent
        cell: ({ row }) => {
            const status = row.getValue('status') as string;
            type VariantType = "destructive" | "success" | "warning" | "outline" |"info" | "default"; 
            const variantOptions: Record<string, VariantType>={ 
                "failed": "destructive", 
                "success": "success", 
                "pending": "warning", 
                "processing": "info" 
            }
            return <Badge variant={ variantOptions[status] ?? "default" } capitalize >{status}</Badge>
            //return <Badge variant={`${status == "failed" ? "destructive" : status == "success" ? "success" : status == "pending" ? "warning" : status == "processing" ? "outline" : "default"}`} >{status}</Badge>
        }
    },

    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
              <Button
                className="flex w-full justify-start"
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                <span>Email</span>
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )   
          },
    },
    {
        accessorKey: "amount",
        header: ({ column }) => {
            return (
              <Button
                className="flex w-full justify-end"
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                <span className="capitalize">Amount</span>
                <SortedIcon  isSorted={column.getIsSorted()} />
              </Button>
            )   
        },//se puede devolver un fComponent

        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
          const payment = row.original
     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => {
                    navigator.clipboard.writeText(payment.id)
                    toast.error("Campo eliminado", {
                        //duration:5000,
                        position:'bottom-right',
                        description: `Se ilimno registro ${payment.clientName} con id:${payment.id} `,
                        action: {
                          label: "Cerrar",
                          onClick: () => console.log("Undo"),
                        },
                      })
                }}
                >
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
]