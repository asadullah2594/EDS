import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { SearchIcon } from "src/assets/svg";
import Button from "./Button";
import { DataTable } from "../views/DataTable";

import { ColumnDef } from "@tanstack/react-table";
import placeHolder from "../../assets/placeholderImage.png";
import { Checkbox } from "../ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { DataTableAccordian } from "../views/DataTableAccordin";
import { ChevronLeftCircleIcon, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const data: any[] = [
  {
    id: "m5gr84i9",
    name: ` Macbook Pro 2020`,
    category: "Electronics",
    site: "4140 Parker Rd. Allentown, New Mexico 31134",
    area: "W. hall 2nd Floor",
    children: [
      {
        id: "1",
        name: ` Macbook Pro 2020`,
        category: "Electronics",
        site: "4140 Parker Rd. Allentown, New Mexico 31134",
        area: "W. hall 2nd Floor",
      },
      {
        id: "2",
        name: ` Macbook Pro 2020`,
        category: "Electronics",
        site: "4140 Parker Rd. Allentown, New Mexico 31134",
        area: "W. hall 2nd Floor",
      },
      {
        id: "3",
        name: ` Macbook Pro 2020`,
        category: "Electronics",
        site: "4140 Parker Rd. Allentown, New Mexico 31134",
        area: "W. hall 2nd Floor",
      },
    ],
  },
  {
    id: "m5gr84i3",
    name: "Macbook Pro 2020",

    category: "Electronics",
    site: "4140 Parker Rd. Allentown, New Mexico 31134",
    area: "W. hall 2nd Floor",

    children: [
      {
        id: "4",
        name: ` Macbook Pro 2020`,
        category: "Electronics",
        site: "4140 Parker Rd. Allentown, New Mexico 31134",
        area: "W. hall 2nd Floor",
      },
      {
        id: "5",
        name: ` Macbook Pro 2020`,
        category: "Electronics",
        site: "4140 Parker Rd. Allentown, New Mexico 31134",
        area: "W. hall 2nd Floor",
      },
    ],
  },
];

const SiteModal = ({ open, setOpen }) => {
  //   const [];
  const [isRotated, setIsRotated] = useState(false);
  const columns: ColumnDef<any>[] = [
    {
      id: "select",
      header: "",
      cell: ({ row }) => {
        console.log(row, "wkdjnawkdjnqwkdjn");
        return (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        );
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: "Asset Name",
      cell: ({ row }) => (
        <div className="capitalize flex items-center gap-3 flex-wrap">
          {" "}
          <ChevronRight
            className={`${isRotated ? "rotate-90" : ""} transition-all`}
          />
          {/* <img src={row.original.image} /> */}
          <span className="whitespace-nowrap">{row.getValue("name")}</span>
        </div>
      ),
    },
    {
      accessorKey: "id",
      header: "Asset ID",
      cell: ({ row }) => (
        <div className="capitalize whitespace-nowrap">{row.getValue("id")}</div>
      ),
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => (
        <div className="capitalize whitespace-nowrap">
          {row.getValue("category")}
        </div>
      ),
    },
    {
      accessorKey: "site",
      header: "Site",
      cell: ({ row }) => (
        <div className="capitalize whitespace-nowrap">
          {row.getValue("site")}
        </div>
      ),
    },
    {
      accessorKey: "area",
      header: "Area",
      cell: ({ row }) => (
        <div className="capitalize whitespace-nowrap">
          {row.getValue("area")}
        </div>
      ),
    },

    //   {
    //     id: "actions",
    //     enableHiding: false,
    //     cell: ({ row }) => {
    //       const payment = row.original;

    //       return (
    //         <DropdownMenu>
    //           <DropdownMenuTrigger asChild>
    //             <div>
    //               <MenuDots className="h-4 w-4" />
    //             </div>
    //           </DropdownMenuTrigger>
    //           <DropdownMenuContent
    //             align="end"
    //             className="!bg-white-value !text-black-value  !ring-0 !border-0"
    //           >
    //             {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
    //             {/* <DropdownMenuItem
    //               onClick={() => navigator.clipboard.writeText(payment.id)}
    //             >
    //               Copy payment ID
    //             </DropdownMenuItem>
    //             <DropdownMenuSeparator /> */}
    //             <DropdownMenuItem className="hover:!bg-grey-100-value p-5 hover:!text-black-value">
    //               View Details
    //             </DropdownMenuItem>
    //             <DropdownMenuItem className="hover:!bg-grey-100-value p-5 hover:!text-black-value">
    //               Edit
    //             </DropdownMenuItem>
    //             <DropdownMenuItem className="hover:!bg-grey-100-value p-5 hover:!text-black-value">
    //               Archive
    //             </DropdownMenuItem>
    //           </DropdownMenuContent>
    //         </DropdownMenu>
    //       );
    //     },
    //   },
  ];

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10 ">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in "
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-xl bg-white  pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-[1016px]  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 bg-white-value"
          >
            <div className="px-6 pb-6">
              <div className="flex justify-between items-center">
                <p className="text-5 font-medium">Teams Members</p>
                <div className="relative  rounded-md shadow-sm w-[310px]">
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
              </div>
            </div>
            <div className="px-6 py-4 bg-bluee-50-value">
              <DataTableAccordian
                columns={columns}
                data={data}
                isRotated={isRotated}
                setIsRotated={setIsRotated}
              />
            </div>
            <div className="pt-6  w-full  flex justify-end px-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 justify-center">
                  <Button
                    variant="default"
                    className="flex justify-center items-center gap-2 p-2 self-stretch rounded-lg bg-grey-50-value   !font-sans font-inter-3 text-2 boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' text-grey-500-value hover:opacity-75  "
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="default"
                    className="flex justify-center items-center gap-2 p-2.5 self-stretch rounded-lg bg-primary-value  !font-sans font-inter-3 text-2 boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' text-white-value hover:opacity-75 "
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default SiteModal;
