import { ArrowButton, PlusButton, PlusIcon } from "../../assets/svg";
import Button from "../common/Button";
import ProductImage from "../../assets/product.png";
import PlaceHolderImage from "../../assets/placeholderImage.png";
import { useState } from "react";
import { Plus } from "lucide-react";
import Avatar from "../../assets/avatar.png";
import Map from "../../assets/map.png";
import AddModal from "../common/Modal";

const CreateNewSite = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" bg-bluee-50-value ">
        <div className="px-6 py-5">
          <div className="flex justify-between items-center ">
            <div>
              <div className="text-grey-600-value font-light text-1">
                Sites Overview
              </div>
              <div className="text-5 font-normal ">Create a New Sites</div>
            </div>
            <div className="flex items-center gap-3 justify-center">
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
        <div className="h-[calc(100vh-166px)] overflow-auto">
          <div className="grid md:grid-cols-3 gap-2 grid-cols-1 ">
            <div className="col-span-2 px-6 py-4">
              <div className="bg-white-value p-4  gap-4 rounded-lg">
                <div className="px-8  ">
                  <div className="font-semibold text-4">Create a New Site</div>
                  <div className="font-normal text-grey-400-value border-b border-slate-200 pb-4 opacity-70 text-2">
                    Add details about Site
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between items-start  mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-normal  text-gray-500 text-2 tracking-0 leading-5 "
                      >
                        Name*
                      </label>
                      <div className="w-[60%] ">
                        <div className=" ">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Add Site Address"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-start  mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm   text-gray-500 text-2 tracking-0 leading-5 "
                      >
                        Site Description
                      </label>
                      <div className="w-[60%] ">
                        <div className=" ">
                          <textarea
                            id="comment"
                            name="comment"
                            rows={4}
                            placeholder="Add Site Description"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-start  mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm   text-gray-500 text-2 tracking-0 leading-5 "
                      >
                        Address
                      </label>
                      <div className="w-[60%] ">
                        <div className=" ">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Add Address"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-start  mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm   text-gray-500 text-2 tracking-0 leading-5 "
                      >
                        No. of Floor
                      </label>
                      <div className="w-[60%] ">
                        <div className=" ">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Add Number of Floors"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-start  mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm  text-gray-500 text-2 tracking-0 leading-5 "
                      >
                        Pin Location on Map
                      </label>
                      <div className="w-[60%] ">
                        <div className=" ">
                          <img src={Map} />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-start  mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm  text-gray-500 text-2 tracking-0 leading-5 "
                      >
                        Site Area (in sq ft)
                      </label>
                      <div className="w-[60%] ">
                        <div className=" ">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Add Site Square Footage"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-start  mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm   text-gray-500 text-2 tracking-0 leading-5 "
                      >
                        IRN
                      </label>
                      <div className="w-[60%] ">
                        <div className=" ">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Add Invoice Reference Number"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-start  mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm   text-gray-500 text-2 tracking-0 leading-5 "
                      >
                        OPU
                      </label>
                      <div className="w-[60%] ">
                        <div className=" ">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Add Operational Unit"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pr-6 py-4 md:pl-0  pl-6">
              <div className=" p-4 bg-white-value rounded-lg  mb-6">
                <div className=" items-center  w-full pb-2  ">
                  <div className="font-semibold text-4">Assign to</div>
                  <div className="font-normal text-2 text-grey-400-value border-b border-slate-200 pb-4 opacity-70">
                    Assign a team member to this Site
                  </div>
                </div>
                <div className="flex w-full justify-between items-center py-4 ">
                  <div className="flex items-center gap-4">
                    <div>
                      <img src={PlaceHolderImage} />
                    </div>
                    <div>
                      <div className="text-2 font-semibold mb-1 flex items-center gap-2 ">
                        Miles, Esther{" "}
                      </div>
                      <div className="text-1 text-[#5C6B82] font-light">
                        Principal
                      </div>
                    </div>
                  </div>
                  <div>
                    <ArrowButton />
                  </div>
                </div>
                <div className="flex w-full justify-between items-center py-4 ">
                  <div className="flex items-center gap-4 cursor-pointer">
                    <div>
                      <PlusButton />
                    </div>
                    <div className="text-1 font-normal text-grey-500-value">
                      Add a User Card{" "}
                    </div>
                  </div>
                  <div></div>
                </div>

                {/* <div className="flex w-full justify-center items-center py-4 text-1 font-medium text-grey-500-value ">
                  View All
                </div> */}
              </div>
              <div className=" p-4 bg-white-value rounded-lg  mb-6">
                <div className=" items-center  w-full pb-2  ">
                  <div className="font-semibold text-4">Connect an Asset</div>
                  <div className="font-normal text-2 text-grey-400-value border-b border-slate-200 pb-4 opacity-70">
                    Select one or more Asset Cards nested under this Site
                  </div>
                </div>
                <div className="flex w-full justify-between items-center py-4 ">
                  <div className="flex items-center gap-4">
                    <div>
                      <img src={PlaceHolderImage} />
                    </div>
                    <div>
                      <div className="text-2 font-semibold mb-1 flex items-center gap-2 ">
                        Mac Book Pro 2024
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
                  <div
                    className="flex items-center gap-4 cursor-pointer"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    <div>
                      <PlusButton />
                    </div>
                    <div className="text-1 font-normal text-grey-500-value">
                      Add a Asset Card{" "}
                    </div>
                  </div>
                  <div></div>
                </div>

                {/* <div className="flex w-full justify-center items-center py-4 text-1 font-medium text-grey-500-value ">
                  View All
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddModal open={open} setOpen={setOpen} />
    </>
  );
};

export default CreateNewSite;
