import { Dialog, DialogPanel } from "@headlessui/react";

import Button from "../common/Button";
import React from "react";

import Select from "react-select";
import OptionSelect from "../common/OptionSelect";

const colourOptions = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Orange",
    value: "orange",
  },
  {
    label: "Orange",
    value: "1",
  },
  {
    label: "Orange",
    value: "2",
  },
  {
    label: "Orange",
    value: "3",
  },
];
const MultiValueStyles = {
  multiValueRemove: (styles: any, { data }: { data: any }) => ({
    ...styles,
    color: "#000",
    ":hover": {
      backgroundColor: "#009875",
      color: "#fff",
    },
  }),
  multiValue: (styles: any, { data }: { data: any }) => {
    const color = data.color;
    return {
      ...styles,
      backgroundColor: "transparent",
      border: "solid 1px #ccd1d8",
      borderRadius: "5px",
    };
  },
};

export default function Drawer({ open, setOpen }: { open: any; setOpen: any }) {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10 ">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16 ">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700 !bg-white-value"
            >
              <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                <div className="h-0 flex-1 overflow-y-auto">
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="divide-y divide-gray-200 px-4 sm:px-6">
                      <div className="space-y-6 pb-5 pt-6">
                        <div className="text-4 font-medium">Filters</div>
                        <div className="text-2 font-light text-grey-400-value !mt-3">
                          Select the fields below to create a new filter...
                        </div>
                        <div>
                          <label
                            htmlFor="project-name"
                            className="block text-sm font-medium leading-6 text-gray-700"
                          >
                            Category
                          </label>
                          <OptionSelect
                            options={colourOptions}
                            isMulti={false}
                            name="valueSelect"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium leading-6 text-gray-700"
                          >
                            Value
                          </label>
                          <div className="mt-2">
                            <OptionSelect
                              options={colourOptions}
                              isMulti={true}
                              name="valueSelectdsd"
                              styles={MultiValueStyles}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-shrink-0 justify-end px-4 py-4 !border-0">
                  <Button
                    variant="default"
                    children="Apply filters"
                    className="flex justify-center items-center gap-2 px-[18px] py-[10px] self-stretch rounded-lg bg-primary-value mt-5  !font-sans font-inter-3 text-2 boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' text-white-value hover:opacity-75 w-full "
                  />
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
