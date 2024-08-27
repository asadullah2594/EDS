import {
  Funnel,
  Listing,
  PlusIcon,
  QRIcon,
  SearchIcon,
} from "../../assets/svg";
import Button from "../common/Button";
import { DataTable } from "./DataTable";
import { Input } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import { MenuDots } from "../../assets/svg";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import placeHolder from "../../assets/placeholderImage.png";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import Drawer from "./Drawer";

const data: any[] = [
  {
    id: "m5gr84i9",
    name: ` Macbook Pro 2020`,
    status: "Available",
    category: "Electronics",
    site: "4140 Parker Rd. Allentown, New Mexico 31134",
    area: "W. hall 2nd Floor",
    assignTo: "Eleanor Pena",
    image: placeHolder,
  },
  {
    id: "m5gr84i3",
    name: "Macbook Pro 2020",
    status: "Available",
    category: "Electronics",
    site: "4140 Parker Rd. Allentown, New Mexico 31134",
    area: "W. hall 2nd Floor",
    assignTo: "Eleanor Pena",
    image: placeHolder,
  },
  {
    id: "m5gr84i55",
    name: "Macbook Pro 2020",
    status: "Out of Order",
    category: "Electronics",
    site: "4140 Parker Rd. Allentown, New Mexico 31134",
    area: "W. hall 2nd Floor",
    assignTo: "Eleanor Pena",
    image: placeHolder,
  },
];

export const columns: ColumnDef<any>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "name",
    header: "Asset Name",
    cell: ({ row }) => (
      <div className="capitalize flex items-center gap-3">
        {" "}
        <img src={row.original.image} />
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "id",
    header: "Asset ID",
    cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "site",
    header: "Site",
    cell: ({ row }) => <div className="capitalize">{row.getValue("site")}</div>,
  },
  {
    accessorKey: "area",
    header: "Area",
    cell: ({ row }) => <div className="capitalize">{row.getValue("area")}</div>,
  },
  {
    accessorKey: "assignTo",
    header: ({ column }) => {
      return (
        // <Button
        //   variant="ghost"
        //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        // >
        //   Email
        //   <CaretSortIcon className="ml-2 h-4 w-4" />
        // </Button>
        <>Assign To</>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("assignTo")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        // <Button
        //   variant="ghost"
        //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        // >
        //   Email
        //   <CaretSortIcon className="ml-2 h-4 w-4" />
        // </Button>
        <>Status</>
      );
    },
    cell: ({ row }) => (
      <div className="font-medium whitespace-nowrap flex  cursor-pointer">
        <div
          className={`${
            row.original.status === "Available"
              ? "bg-green-100 text-[#017B5F]"
              : "bg-[#FFEFE1] text-orange-500-value"
          }  text-center rounded-[20px] py-[1px] px-4 capitalize text-[12px] max-w-fit`}
        >
          {row.getValue("status")}
        </div>
      </div>
    ),
  },
  //   {
  //     accessorKey: "status",
  //     header: () => <div className="text-right">Status</div>,
  //     cell: ({ row }) => {
  //       const amount = parseFloat(row.getValue("status"));

  //       // Format the amount as a dollar amount
  //       const formatted = new Intl.NumberFormat("en-US", {
  //         style: "currency",
  //         currency: "USD",
  //       }).format(amount);

  //       return <div className="text-right font-medium">{formatted}</div>;
  //     },
  //   },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div>
              <MenuDots className="h-4 w-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="!bg-white-value !text-black-value  !ring-0 !border-0"
          >
            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
            {/* <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator /> */}
            <DropdownMenuItem className="hover:!bg-grey-100-value p-5 hover:!text-black-value">
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:!bg-grey-100-value p-5 hover:!text-black-value">
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:!bg-grey-100-value p-5 hover:!text-black-value">
              Archive
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const AssetsListing = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer open={open} setOpen={setOpen} />
      <div className=" bg-bluee-50-value h-[100vh]">
        <div className="px-6 py-5">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-grey-600-value font-light text-1">
                Assets
              </div>
              <div className="text-5 font-semibold ">Asset List</div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Button
                variant="default"
                className="flex justify-center items-center gap-2 p-2.5 self-stretch rounded-lg bg-grey-50-value   !font-sans font-inter-3 text-2 boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' text-grey-500-value hover:opacity-75  "
              >
                <div className="w-5">
                  {" "}
                  <QRIcon />
                </div>
                &nbsp; QR-Codes
              </Button>
              <Button
                variant="default"
                className="flex justify-center items-center gap-2 p-2.5 self-stretch rounded-lg bg-primary-value  !font-sans font-inter-3 text-2 boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' text-white-value hover:opacity-75 "
              >
                <div className="w-5">
                  {" "}
                  <PlusIcon />
                </div>
                &nbsp; Create New
              </Button>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="flex justify-between px-6 py-4 items-center">
          <>
            <div className="relative mt-2 rounded-md shadow-sm max-w-[310px] w-full">
              <div className="pointer-events-none absolute inset-y-[0] left-[0] flex items-center pl-3">
                <SearchIcon
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-400"
                />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Search"
                className="   block w-full rounded-xl border-0 py-1.5 pl-10 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6 bg-grey-50-value "
              />
            </div>
          </>

          <div className="flex gap-3 text-grey-500-value text-1 font-medium cursor-pointer">
            <div
              className="flex items-center"
              onClick={() => {
                setOpen(true);
              }}
            >
              <Funnel />
              &nbsp;Filters
            </div>
            <div className="flex items-center">
              {" "}
              <Listing />
              &nbsp;Archive
            </div>
          </div>
        </div>
        <div className="px-6">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </>
  );
};

export default AssetsListing;
