import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import { Checkbox } from "../ui/checkbox";

export function DataTableAccordian({
  columns,
  data,
  isRotated,
  setIsRotated,
}: {
  columns: any;
  data: any;
  isRotated: any;
  setIsRotated: any;
}) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState<any>({});
  const [expandedRows, setExpandedRows] = React.useState<
    Record<string, boolean>
  >({});

  const handleParentCheckboxChange = (parentId: string, isChecked: boolean) => {
    setRowSelection((prev: any) => {
      const updatedSelection = { ...prev };

      if (isChecked) {
        updatedSelection[parentId] = true;
      } else {
        delete updatedSelection[parentId];
      }

      const parentData = data.find((item) => item.id === parentId);
      if (parentData && parentData.children) {
        parentData.children.forEach((child: any) => {
          if (isChecked) {
            updatedSelection[child.id] = true;
          } else {
            delete updatedSelection[child.id];
          }
        });
      }

      return updatedSelection;
    });
  };

  const handleChildCheckboxChange = (
    parentId: string,
    childId: string,
    isChecked: boolean
  ) => {
    setRowSelection((prev: any) => {
      const updatedSelection = { ...prev };

      if (isChecked) {
        updatedSelection[childId] = true;
      } else {
        delete updatedSelection[childId];
      }

      const parentData = data.find((item) => item.id === parentId);
      const allChildrenSelected =
        parentData &&
        parentData.children.every((child: any) => updatedSelection[child.id]);

      if (allChildrenSelected) {
        updatedSelection[parentId] = true;
      } else {
        delete updatedSelection[parentId];
      }

      return updatedSelection;
    });
  };

  const toggleRowExpansion = (rowId: string) => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="rounded-lg bg-white-value">
        <Table>
          <TableHeader className="border-t-0">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:!bg-white-value">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-2 !text-[#475467] font-normal "
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row: any) => (
                <React.Fragment key={row.id}>
                  <TableRow
                    data-state={rowSelection[row.id] && "selected"}
                    className="hover:!bg-white-value cursor-pointer"
                    onClick={() => {
                      toggleRowExpansion(row.id);
                      setIsRotated(!isRotated);
                    }}
                  >
                    {row.getVisibleCells().map((cell: any) => (
                      <TableCell key={cell.id} className={`!py-[6.5px]`}>
                        {cell.column.id === "select" ? (
                          <div className="select-none">
                            <Checkbox
                              checked={!!rowSelection[row.original.id]}
                              onCheckedChange={(value) => {
                                handleParentCheckboxChange(
                                  row.original.id,
                                  !!value
                                );
                              }}
                              aria-label="Select row"
                              onClick={(e) => e.stopPropagation()}
                            />
                          </div>
                        ) : (
                          flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )
                        )}
                      </TableCell>
                    ))}
                  </TableRow>

                  {expandedRows[row.id] &&
                    row.original.children?.length > 0 && (
                      <TableRow className="!bg-gray-50">
                        <TableCell colSpan={columns.length}>
                          <div
                            className={`ml-10 transition-all duration-300 overflow-hidden ${
                              expandedRows[row.id]
                                ? "max-h-[1000px]" // You can adjust this value or calculate dynamically
                                : "max-h-0"
                            }`}
                          >
                            {row.original.children.map((child: any) => (
                              <TableRow
                                key={child.id}
                                data-state={
                                  rowSelection[child.id] && "selected"
                                }
                                className="hover:!bg-white-value"
                              >
                                {columns.map((column: any) => (
                                  <TableCell
                                    key={column.id}
                                    className={`!py-[6.5px]`}
                                  >
                                    {column.id === "select" ? (
                                      <Checkbox
                                        checked={!!rowSelection[child.id]}
                                        onCheckedChange={(value) =>
                                          handleChildCheckboxChange(
                                            row.original.id, // Pass the correct parent ID
                                            child.id,
                                            !!value
                                          )
                                        }
                                        aria-label="Select child row"
                                        onClick={(e) => e.stopPropagation()}
                                      />
                                    ) : (
                                      child[column.accessorKey]
                                    )}
                                  </TableCell>
                                ))}
                              </TableRow>
                            ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-7 pb-3 px-4 sm:px-0">
          <div className="-mt-px flex">
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              <ArrowLongLeftIcon
                aria-hidden="true"
                className="mr-3 h-5 w-5 text-gray-400"
              />
              Previous
            </a>
          </div>
          <div className="hidden md:-mt-px md:flex">
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              1
            </a>
            <div className="px-4 pt-4">
              <a
                href="#"
                aria-current="page"
                className="h-7 w-7 flex justify-center items-center border border-primary-value p-4 text-sm font-medium text-primary-value rounded-full "
              >
                2
              </a>
            </div>
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              3
            </a>
          </div>
          <div className="-mt-px flex justify-end">
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Next
              <ArrowLongRightIcon
                aria-hidden="true"
                className="ml-3 h-5 w-5 text-gray-400"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
