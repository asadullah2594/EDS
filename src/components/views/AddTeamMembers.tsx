import { ArrowButton, PlusButton, PlusIcon } from "../../assets/svg";
import Button from "../common/Button";
import PlaceHolderImage from "../../assets/placeholderImage.png";
import { useState } from "react";

import AddModal from "../common/Modal";
import { UploadIcon } from "../../assets/svg";
import photoPlaceholder from "../../assets/photoplaceholder.png";
import { CrossIcon, LocateIcon } from "lucide-react";
import { XMarkIcon } from "@heroicons/react/20/solid";

const AddTeamMembers = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" bg-bluee-50-value ">
        <div className="px-6 py-5">
          <div className="flex justify-between items-center ">
            <div>
              <div className="text-grey-600-value font-light text-1">
                Resource Oversight &nbsp;{">"}&nbsp;Team Management
              </div>
              <div className="text-5 font-normal ">Edit Details</div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Button
                variant="default"
                className="flex justify-center items-center gap-2 p-2.5 self-stretch rounded-lg bg-primary-value  !font-sans font-inter-3 text-2 boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' text-white-value hover:opacity-75 "
              >
                {/* <div className="w-5"> <PlusIcon /></div> */}
                Update
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
                  <div className="font-semibold text-4">Edit User Details</div>
                  <div className="font-normal text-grey-400-value border-b border-slate-200 pb-4 opacity-70 text-2">
                    Add details about team member
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
                        className="block text-sm font-normal  text-gray-500 text-2 tracking-0 leading-5 "
                      >
                        Email
                      </label>
                      <div className="w-[60%] ">
                        <div className=" ">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Larry Roin@gmail.com"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-start  mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-normal  text-gray-500 text-2 tracking-0 leading-5 "
                      >
                        Phone Number
                      </label>
                      <div className="w-[60%] ">
                        <div className=" ">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="+1(000)323-322"
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
                        Address
                      </label>
                      <div className="w-[60%] ">
                        <div className=" ">
                          <textarea
                            id="comment"
                            name="comment"
                            rows={4}
                            placeholder="40239 Drew Vista, Mosemouth, CO 91668"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6"
                            defaultValue={""}
                          />
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
                          <select
                            id="location"
                            name="location"
                            defaultValue="Canada"
                            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-value sm:text-sm sm:leading-6"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="flex justify-between items-start  mt-5 mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm  text-gray-500 text-2 tracking-0 leading-5 "
                      >
                        Profile Image
                      </label>

                      <div className="w-[60%] ">
                        <div className=" grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
                          <div className="col-span-full">
                            <div className=" flex justify-start items-center  rounded-lg border border-solid border-gray-600/25 px-6 py-3 gap-1.5 ">
                              <UploadIcon />
                              <div className="text-left">
                                <div className=" flex text-sm leading-6 text-gray-600">
                                  <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer rounded-md bg-white  focus-within:outline-none  font-semibold  "
                                  >
                                    <span>Click to upload &nbsp; </span>
                                    <input
                                      id="file-upload"
                                      name="file-upload"
                                      type="file"
                                      className="sr-only"
                                      //   onChange={handleImageChange}
                                    />
                                  </label>
                                  <p className="pl-1 font-light text-gray-400 ">
                                    or drag and drop
                                  </p>
                                </div>
                                <p className="text-xs leading-5 text-gray-400">
                                  File size should be less then 10MB
                                </p>
                              </div>
                            </div>
                          </div>
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
                  <div className="font-semibold text-4">Assign a Site</div>
                  <div className="font-normal text-2 text-grey-400-value border-b border-slate-200 pb-4 opacity-70">
                    Select a site to assign to team member
                  </div>
                </div>
                <div className="flex w-full justify-between items-center py-4 ">
                  <div className="flex w-full justify-between items-center py-4 ">
                    <div className="text-1 text-[#232323] font-normal">
                      <LocateIcon />
                      &nbsp;2972 Westheimer Rd. Santa Ana, Illinois 85486
                    </div>
                    <div>
                      <XMarkIcon color="black" width={20} height={20} />
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-between items-center py-4 ">
                  <div className="flex items-center gap-4 cursor-pointer">
                    <div>
                      <PlusButton />
                    </div>
                    <div className="text-1 font-normal text-grey-500-value">
                      Select a Site{" "}
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

export default AddTeamMembers;
