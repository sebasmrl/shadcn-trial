"use client"

import { Badge } from "@/components/ui/badge";
import { Payment } from "@/data/payments.data"
import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
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

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "clientName",
        header: () => <span>Client Name</span>, //se puede devolver un fComponent
    },
    {
        accessorKey: "status",
        header: "Status",
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
        header: "Email",
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-right">Amount</div>,
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