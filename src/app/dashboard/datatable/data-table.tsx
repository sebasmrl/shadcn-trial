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




interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}


export function DataTable<TData, TValue>({ columns, data, }: DataTableProps<TData, TValue>) {

    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [currentStatus, setCurrentStatus] = useState('all');

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        //pagination
        getPaginationRowModel: getPaginationRowModel(),

        //sorting
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),

        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),

        state: {
            sorting,
            columnFilters
        },
    })

    return (
        <div className="mX-2">

            <div className="flex items-center py-4 justify-between">
                <Input
                    placeholder="Filter emails..."
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
                            table.getColumn("status")?.setFilterValue(value)
                            setCurrentStatus('all');
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

        </div >
    )
}
