import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Button from "./Button";
import { SearchIcon, UploadIcon } from "src/assets/svg";

const AddModal = ({ open, setOpen, selectedTab }) => {
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
            className="relative transform overflow-hidden rounded-xl bg-white  pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-[572px]  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 bg-white-value"
          >
            <div className="px-6 pb-6 border-b ">
              <div className="r">
                <p className="text-5 font-medium">
                  {selectedTab === 1
                    ? "Invite Team Member"
                    : "Create New Vendor Profile"}
                </p>
                <p className="text-2 font-normal text-grey-400-value">
                  {selectedTab === 1
                    ? "Send invites via email to your team members to join your Emerald Workspace"
                    : "Add Details about Vendor Representative"}
                </p>
              </div>
            </div>
            <div className="px-4 py-6">
              {selectedTab === 1 ? (
                <>
                  <div className="  mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-normal  text-gray-500 text-2 tracking-0 leading-5 "
                    >
                      Email
                    </label>
                    <div className=" ">
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
                  <div className="  mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-normal  text-gray-500 text-2 tracking-0 leading-5 "
                    >
                      Privilege Level
                    </label>
                    <div className=" ">
                      <div className=" ">
                        <select
                          id="location"
                          name="location"
                          defaultValue="Canada"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="  mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-normal  text-gray-500 text-2 tracking-0 leading-5 "
                    >
                      Assign a Site
                    </label>
                    <div className=" ">
                      <div className=" ">
                        <select
                          id="location"
                          name="location"
                          defaultValue="Canada"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="  mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-normal  text-gray-500 text-2 tracking-0 leading-5 "
                    >
                      Name
                    </label>
                    <div className=" ">
                      <div className=" ">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Add Name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="  mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-normal  text-gray-500 text-2 tracking-0 leading-5 "
                    >
                      Email
                    </label>
                    <div className=" ">
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
                  <div className="  mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-normal  text-gray-500 text-2 tracking-0 leading-5 "
                    >
                      Phone Number
                    </label>
                    <div className=" ">
                      <div className=" ">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Add Phone Number"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="  mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-normal  text-gray-500 text-2 tracking-0 leading-5 "
                    >
                      Role
                    </label>
                    <div className=" ">
                      <div className=" ">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Add Role"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-full ">
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
                              onChange={() => {}}
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
                </>
              )}
            </div>
            <div className="pt-6  w-full  flex justify-end px-6 border-t">
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

export default AddModal;
