import {
  ArrowButton,
  CalenderIcon,
  EditIcon,
  Latter,
  Listing,
  LoadingIcon,
  MenuDots,
  PathIcon,
  Phone,
  PlusIcon,
  QRIcon,
  RoleIcon,
} from "../../assets/svg";
import Button from "../common/Button";
import ProductImage from "../../assets/userImage.png";
import PlaceHolderImage from "../../assets/placeholderImage.png";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ChevronDown, PinIcon, Plus } from "lucide-react";
import Avatar from "../../assets/avatar.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import nameFrame from "../../assets/name_frame.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./DataTable";

const tabs = [
  { name: "Details", href: "#", current: false },
  { name: "Work History", href: "#", current: false },
  { name: "Vendor details", href: "#", current: true },
  { name: "Life Cycle", href: "#", current: false },
  { name: "Archived Requests", href: "#", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const data: any[] = [
  {
    id: "m5gr84i9",
    name: `Larry Roin`,
    email: "Miles.Esther@example.com",
    role: "Human Resource Manager",
    phone: "+1 234 567 890",
  },
  {
    id: "m5gr84",
    name: `Floyd Miles`,
    email: "Miles.Esther@example.com",
    role: "Human Resource Manager",
    phone: "+1 234 567 890",
  },
  {
    id: "m5gr849",
    name: `Brooklyn Simmons`,
    email: "Miles.Esther@example.com",
    role: "Human Resource Manager",
    phone: "+1 234 567 890",
  },
  {
    id: "m5gr4i9",
    name: `Kristin Watson`,
    email: "Miles.Esther@example.com",
    role: "Human Resource Manager",
    phone: "+1 234 567 890",
  },
];

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize flex items-center gap-3 flex-wrap py-4">
        {" "}
        <img src={row.original.image} />
        <span className="whitespace-nowrap">{row.getValue("name")}</span>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="capitalize whitespace-nowrap">
        {row.getValue("email")}
      </div>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
    cell: ({ row }) => (
      <div className="capitalize whitespace-nowrap">
        {row.getValue("phone")}
      </div>
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => (
      <div className="capitalize whitespace-nowrap">{row.getValue("role")}</div>
    ),
  },
];
const VendorCard = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" bg-bluee-50-value ">
        <div className="px-6 py-5">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-grey-600-value font-light text-1">
                Resource Oversight
              </div>
              <div className="text-5 font-normal ">Vendor Card</div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Button
                variant="default"
                className="flex justify-center items-center gap-1.5 p-2.5 self-stretch rounded-lg bg-grey-50-value   !font-sans font-inter-3 text-2 boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' text-grey-500-value hover:opacity-75  "
              >
                <div className="w-5">
                  {" "}
                  <EditIcon />
                </div>
                &nbsp; Edit
              </Button>
              <Button
                variant="default"
                className="flex justify-center items-center gap-2 p-2.5 self-stretch rounded-lg bg-primary-value  !font-sans font-inter-3 text-2 boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' text-white-value hover:opacity-75 "
              >
                <div className="w-5">
                  {" "}
                  <PlusIcon />
                </div>
                &nbsp; Create New PO
              </Button>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="h-[calc(100vh-166px)] overflow-auto">
          <div className="grid grid-cols-3 gap-2 ">
            <div className="col-span-2 px-6 py-4">
              <div className="bg-white-value p-4 flex gap-4 rounded-lg">
                <div>
                  <img src={ProductImage} />
                </div>
                <div className="flex flex-col w-full">
                  <div className="text-3 font-semibold mb-1 flex items-center gap-2">
                    Larry Roin{" "}
                    {/* <div className=" bg-[#0198751A] text-[#019875] text-1 px-2 py-1 rounded-xl font-light flex items-center gap-1 w-fit">
                      <span className="h-1 w-1 rounded-full bg-[#019875] flex items-center "></span>
                      Working
                    </div> */}
                  </div>
                  <div className="px-3 py-1 bg-bluee-50-value text-grey-600-value w-fit rounded-lg text-1 font-semibold border border-[#EAEDEF]">
                    ADR-3245
                  </div>
                  <div className="my-4">
                    <div className="mb-2 flex items-center ">
                      <div className="flex gap-2 items-center min-w-36">
                        <div>
                          <Phone />
                        </div>
                        <div className="text-[#161616] text-1 font-normal">
                          +01-123-1233
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <Latter />
                        </div>
                        <div className="text-[#161616] text-1 font-normal">
                          Harry Kim@vendor.com
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 flex items-center ">
                      <div className="flex gap-2 items-center min-w-36">
                        <div>
                          <RoleIcon />
                        </div>
                        <div className="text-[#161616] text-1 font-normal">
                          Manager
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <PathIcon />
                        </div>
                        <div className="text-[#161616] text-1 font-normal break-keep">
                          2972 Westheimer Rd. Santa Ana, Illinois 85486
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Tabs defaultValue="details" className="w-full mt-4 ">
                <TabsList className="flex w-full grid-cols-2 !bg-transparent justify-start gap-7">
                  <TabsTrigger
                    value="details"
                    className={
                      " data-[state=active]:!bg-primary-value data-[state=active]:!text-white-value data-[state=active]:!py-2 rounded-3xl border-transparent text-gray-500  hover:bg-primary-value hover:text-white-value whitespace-nowrap border-b-2 !px-4 !py-2 text-sm font-medium"
                    }
                  >
                    Assets
                  </TabsTrigger>
                  <TabsTrigger
                    value="work"
                    className={
                      " data-[state=active]:!bg-primary-value data-[state=active]:!text-white-value data-[state=active]:!py-2 rounded-3xl border-transparent text-gray-500  hover:bg-primary-value hover:text-white-value whitespace-nowrap border-b-2 !px-4 !py-2 text-sm font-medium"
                    }
                  >
                    Vendor Profiles
                  </TabsTrigger>
                  <TabsTrigger
                    value="aa"
                    className={
                      " data-[state=active]:!bg-primary-value data-[state=active]:!text-white-value data-[state=active]:!py-2 rounded-3xl border-transparent text-gray-500  hover:bg-primary-value hover:text-white-value whitespace-nowrap border-b-2 !px-4 !py-2 text-sm font-medium"
                    }
                  >
                    Notes and Attachments
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="details">
                  <div className="bg-white-value px-4 py-6 rounded-lg">
                    <div className="text-3 font-semibold mb-4">Assets</div>
                    <div className="w-full flex items-center justify-between gap-4">
                      <div className="w-full">
                        <div className="flex w-full justify-between items-center py-4 border-b border-b-[#EFF0F3]">
                          <div className="flex items-center gap-4">
                            <div>
                              <img src={PlaceHolderImage} />
                            </div>
                            <div>
                              <div className="text-2 font-semibold mb-1 flex items-center gap-2 ">
                                Mac Book Pro 2024{" "}
                              </div>
                              <div className="px-3 py-1 bg-bluee-50-value text-grey-600-value w-fit rounded-lg text-0 font-semibold border border-[#EAEDEF]">
                                ED-LPT-3421
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full justify-between items-center py-4 border-b border-b-[#EFF0F3]">
                          <div className="flex items-center gap-4">
                            <div>
                              <img src={PlaceHolderImage} />
                            </div>
                            <div>
                              <div className="text-2 font-semibold mb-1 flex items-center gap-2 ">
                                Mac Book Pro 2024{" "}
                              </div>
                              <div className="px-3 py-1 bg-bluee-50-value text-grey-600-value w-fit rounded-lg text-0 font-semibold border border-[#EAEDEF]">
                                ED-LPT-3421
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full justify-between items-center py-4 border-b border-b-[#EFF0F3]">
                          <div className="flex items-center gap-4">
                            <div>
                              <img src={PlaceHolderImage} />
                            </div>
                            <div>
                              <div className="text-2 font-semibold mb-1 flex items-center gap-2 ">
                                Mac Book Pro 2024{" "}
                              </div>
                              <div className="px-3 py-1 bg-bluee-50-value text-grey-600-value w-fit rounded-lg text-0 font-semibold border border-[#EAEDEF]">
                                ED-LPT-3421
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="flex w-full justify-between items-center py-4 border-b border-b-[#EFF0F3]">
                          <div className="flex items-center gap-4">
                            <div>
                              <img src={PlaceHolderImage} />
                            </div>
                            <div>
                              <div className="text-2 font-semibold mb-1 flex items-center gap-2 ">
                                Mac Book Pro 2024{" "}
                              </div>
                              <div className="px-3 py-1 bg-bluee-50-value text-grey-600-value w-fit rounded-lg text-0 font-semibold border border-[#EAEDEF]">
                                ED-LPT-3421
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full justify-between items-center py-4 border-b border-b-[#EFF0F3]">
                          <div className="flex items-center gap-4">
                            <div>
                              <img src={PlaceHolderImage} />
                            </div>
                            <div>
                              <div className="text-2 font-semibold mb-1 flex items-center gap-2 ">
                                Mac Book Pro 2024{" "}
                              </div>
                              <div className="px-3 py-1 bg-bluee-50-value text-grey-600-value w-fit rounded-lg text-0 font-semibold border border-[#EAEDEF]">
                                ED-LPT-3421
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full justify-between items-center py-4 border-b border-b-[#EFF0F3]">
                          <div className="flex items-center gap-4">
                            <div>
                              <img src={PlaceHolderImage} />
                            </div>
                            <div>
                              <div className="text-2 font-semibold mb-1 flex items-center gap-2 ">
                                Mac Book Pro 2024{" "}
                              </div>
                              <div className="px-3 py-1 bg-bluee-50-value text-grey-600-value w-fit rounded-lg text-0 font-semibold border border-[#EAEDEF]">
                                ED-LPT-3421
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="work" className="rounded-lg">
                  <div className="bg-white-value px-4 py-6 rounded-lg">
                    <div className="text-3 font-semibold mb-4">Members</div>
                    <div className="w-full flex items-center justify-between gap-4">
                      <DataTable columns={columns} data={data} />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="aa">
                  <div>
                    <div className=" p-4 bg-white-value rounded-lg  mb-6">
                      <div className="flex justify-between items-center w-full pb-2 border-b-2 border-b-[#E7E8EA] mb-4">
                        <div>Notes & Attachments</div>
                        <div>
                          <Plus size={20} color="#5C6B82" />
                        </div>
                      </div>
                      <div className="bg-grey-50-value rounded-2xl mb-3">
                        <div className="flex gap-2 items-center px-3 pt-3 pb-2">
                          <div>
                            <img src={Avatar} />
                          </div>
                          <div>
                            <div className="font-medium">Larry Roin</div>
                            <div className="text-0 text-[#7D899B] font-norma ">
                              March 16th, 2024- 10:15 am
                            </div>
                          </div>
                        </div>
                        <div className=" text-[#546176] text-0 px-3 pt-2 pb-2">
                          The screen appears to have a minor crack and could
                          potentially sustain further damage from even slight
                          impacts. It's crucial to address this issue before it
                          worsens and renders the screen completely unusable.
                        </div>
                        <div className="px-3 pt-1 pb-3">
                          <img src={ProductImage} />
                        </div>
                      </div>
                      <div className="flex w-full justify-center items-center py-4 text-1 font-medium text-grey-500-value ">
                        View All
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div className="pr-6 py-4 ">
              <div className=" p-4 bg-white-value rounded-lg  mb-6">
                <div className="flex justify-between items-center w-full pb-2 border-b-2 border-b-[#E7E8EA] mb-4">
                  <div>Linked Assets</div>
                  <div>
                    <Plus size={20} color="#5C6B82" />
                  </div>
                </div>
                <div className="flex w-full justify-between items-center py-4 border-b border-b-[#EFF0F3]">
                  <div className="flex items-center gap-4">
                    <div>
                      <img src={PlaceHolderImage} />
                    </div>
                    <div>
                      <div className="text-2 font-semibold mb-1 flex items-center gap-2 ">
                        Mac Book Pro 2024{" "}
                      </div>
                      <div className="px-3 py-1 bg-bluee-50-value text-grey-600-value w-fit rounded-lg text-1 font-semibold border border-[#EAEDEF]">
                        ED-LPT-3421
                      </div>
                    </div>
                  </div>
                  <div>
                    <ArrowButton />
                  </div>
                </div>
                <div className="flex w-full justify-between items-center py-4 border-b border-b-[#EFF0F3]">
                  <div className="flex items-center gap-4">
                    <div>
                      <img src={PlaceHolderImage} />
                    </div>
                    <div>
                      <div className="text-2 font-semibold mb-1 flex items-center gap-2 ">
                        Mac Book Pro 2024{" "}
                      </div>
                      <div className="px-3 py-1 bg-bluee-50-value text-grey-600-value w-fit rounded-lg text-1 font-semibold border border-[#EAEDEF]">
                        ED-LPT-3421
                      </div>
                    </div>
                  </div>
                  <div>
                    <ArrowButton />
                  </div>
                </div>
                <div className="flex w-full justify-between items-center py-4 ">
                  <div className="flex items-center gap-4">
                    <div>
                      <img src={PlaceHolderImage} />
                    </div>
                    <div>
                      <div className="text-2 font-semibold mb-1 flex items-center gap-2 ">
                        Mac Book Pro 2024{" "}
                      </div>
                      <div className="px-3 py-1 bg-bluee-50-value text-grey-600-value w-fit rounded-lg text-1 font-semibold border border-[#EAEDEF]">
                        ED-LPT-3421
                      </div>
                    </div>
                  </div>
                  <div>
                    <ArrowButton />
                  </div>
                </div>
                <div className="flex w-full justify-center items-center py-4 text-1 font-medium text-grey-500-value ">
                  View All
                </div>
              </div>
              <div className=" p-4 bg-white-value rounded-lg  mb-6">
                <div className="flex justify-between items-center w-full pb-2 border-b-2 border-b-[#E7E8EA] mb-4">
                  <div>Notes & Attachments</div>
                  <div>
                    <Plus size={20} color="#5C6B82" />
                  </div>
                </div>
                <div className="bg-grey-50-value rounded-2xl mb-3">
                  <div className="flex gap-2 items-center px-3 pt-3 pb-2">
                    <div>
                      <img src={Avatar} />
                    </div>
                    <div>
                      <div className="font-medium">Larry Roin</div>
                      <div className="text-0 text-[#7D899B] font-norma ">
                        March 16th, 2024- 10:15 am
                      </div>
                    </div>
                  </div>
                  <div className=" text-[#546176] text-0 px-3 pt-2 pb-2">
                    The screen appears to have a minor crack and could
                    potentially sustain further damage from even slight impacts.
                    It's crucial to address this issue before it worsens and
                    renders the screen completely unusable.
                  </div>
                  <div className="px-3 pt-1 pb-3">
                    <img src={ProductImage} />
                  </div>
                </div>
                <div className="flex w-full justify-center items-center py-4 text-1 font-medium text-grey-500-value ">
                  View All
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorCard;
