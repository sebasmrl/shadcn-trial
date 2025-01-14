"use client";

import { useState } from "react";

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,

    getPaginationRowModel,

    SortingState,
    getSortedRowModel, //permite saber cual es la fila a ordenada en ese momento

    ColumnFiltersState, //
    getFilteredRowModel, //

    VisibilityState,

} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Payment } from "@/data/payments.data";


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}


export function DataTable<TData, TValue>({ columns, data, }: DataTableProps<TData, TValue>) {

    const [sorting, setSorting] = useState<SortingState>([]);       //estado para manejar ordenamiento en useReactTable
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);     //estado filtro para useReactTable que usa en cualquier columna
    const [currentStatus, setCurrentStatus] = useState('all');      //estado de filtro por campo status
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});      //visibilidad de columna con el dropdown 
    const [rowSelection, setRowSelection] = useState({});         //tabal seleccionada

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        //pagination
        getPaginationRowModel: getPaginationRowModel(),

        //sorting
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        //filter
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        //visibility
        onColumnVisibilityChange: setColumnVisibility,
        //selection rows
        onRowSelectionChange: setRowSelection,

        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection
        },
    })

    return (
        <div className="mx-2">

            <div className="flex items-center py-4 justify-between gap-2">
                {/*  <Input
                    placeholder="Filter emails..."
                    value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                    onChange={(event) => {
                        setCurrentStatus('all');
                        table.getColumn("status")?.setFilterValue(undefined);

                        table.getColumn("email")?.setFilterValue(event.target.value)
                    }}
                    className="max-w-sm"
                /> */}
                <Input
                    placeholder="Filtrar por cualquier campo (clientName, email, status)"
                    value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                    onChange={(event) => {
                        setCurrentStatus('all');
                        table.getColumn("status")?.setFilterValue(undefined);

                        table.getColumn("email")?.setFilterValue(event.target.value)
                    }}
                    className="max-w-sm"
                />
                <Select
                    value={currentStatus}
                    onValueChange={(value) => {

                        if (value === 'all') {
                            setCurrentStatus('all');
                            table.getColumn("status")?.setFilterValue(undefined)
                            return;
                        }

                        setCurrentStatus(value);
                        table.getColumn("status")?.setFilterValue(value)
                    }}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Status</SelectLabel>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="processing">Proccesing</SelectItem>
                            <SelectItem value="success">Success</SelectItem>
                            <SelectItem value="failed">Failed</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Button variant={'destructive'} onClick={() => {
                    console.log(rowSelection);   //{0:true, 17:true} columnas seleccionas (siempre se mantiene ese indice)
                    /* table.getSelectedRowModel().rows.forEach( (row)=>{
                        console.log(row.original);
                    }) */
                    const ids = table.getSelectedRowModel()
                        .rows
                        .map(row => (row.original as Payment).clientName);
                    console.log(ids)

                }}>Eliminar</Button>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table.getAllColumns()
                            .filter((column) => column.getCanHide())
                            .filter((column) => column.id != "actions") //es el mismo identificador puesto en columns.tsx
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>



            <div className="rounded-md border">
                <Table>

                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => ( //tankstack
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => { //obtener cabeceras de columnas
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody>
                        {table.getRowModel().rows?.length ? (   //verificar si no esta vacio
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}

                        <TableRow>
                            <TableCell colSpan={columns.length} className="text-center" key={"nueva-insercion"}>
                                {"Epa"}
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </div>




            {/* Controles */}
            <div className="flex items-center justify-end space-x-2 py-4 mx-4">

                {/* informacion de filas seleccionadas */}
                <div className="flex-1 text-sm text-muted-foreground items-center ">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>

                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>


            <Select onValueChange={(value)=>{
                table.setPageSize(Number(value));
            }}>
                <SelectTrigger className="w-[180px] ">
                    <SelectValue placeholder="10 Rows"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="20">20</SelectItem>
                        <SelectItem value="30">30</SelectItem>
                        <SelectItem value="40">40</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                        <SelectItem value="100">100</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>


        </div >
    )
}
