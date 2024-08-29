import {
  ArrowButton,
  EditIcon,
  Listing,
  PlusIcon,
  QRIcon,
} from "../../assets/svg";
import Button from "../common/Button";
import ProductImage from "../../assets/product.png";
import PlaceHolderImage from "../../assets/placeholderImage.png";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Plus } from "lucide-react";
import Avatar from "../../assets/avatar.png";
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
const AssetsDetails = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" bg-bluee-50-value ">
        <div className="px-6 py-5">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-grey-600-value font-light text-1">
                Assets
              </div>
              <div className="text-5 font-normal ">Asset Card Details</div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="flex items-center  text-grey-500-value text-1 font-medium">
                {" "}
                <QRIcon />
                &nbsp;QR-Code
              </div>
              <div className="flex items-center  text-grey-500-value text-1 font-medium">
                {" "}
                <Listing />
                &nbsp;Archive
              </div>
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
                &nbsp; Create New WO
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
                <div className="flex flex-col ">
                  <div className="text-3 font-semibold mb-1 flex items-center gap-2">
                    Mac Book Pro 2024{" "}
                    <div className=" bg-[#0198751A] text-[#019875] text-1 px-2 py-1 rounded-xl font-light flex items-center gap-1 w-fit">
                      <span className="h-1 w-1 rounded-full bg-[#019875] flex items-center "></span>
                      Working
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-bluee-50-value text-grey-600-value w-fit rounded-lg text-1 font-semibold border border-[#EAEDEF]">
                    ED-LPT-3421
                  </div>
                  <div className="text-1 font-normal text-grey-500-value mt-3">
                    HP ProBook Model: ABC123, Serial Number: XYZ789. Compact and
                    portable, perfect for on-the-go work. Equipped with 8GB RAM
                    and running on Windows 10. Ideal for professionals seeking
                    reliability and efficiency.
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
                    Details
                  </TabsTrigger>
                  <TabsTrigger
                    value="work"
                    className={
                      " data-[state=active]:!bg-primary-value data-[state=active]:!text-white-value data-[state=active]:!py-2 rounded-3xl border-transparent text-gray-500  hover:bg-primary-value hover:text-white-value whitespace-nowrap border-b-2 !px-4 !py-2 text-sm font-medium"
                    }
                  >
                    Work History
                  </TabsTrigger>
                  <TabsTrigger
                    value="aa"
                    className={
                      " data-[state=active]:!bg-primary-value data-[state=active]:!text-white-value data-[state=active]:!py-2 rounded-3xl border-transparent text-gray-500  hover:bg-primary-value hover:text-white-value whitespace-nowrap border-b-2 !px-4 !py-2 text-sm font-medium"
                    }
                  >
                    Vendor details
                  </TabsTrigger>
                  <TabsTrigger
                    value="vaa"
                    className={
                      " data-[state=active]:!bg-primary-value data-[state=active]:!text-white-value data-[state=active]:!py-2 rounded-3xl border-transparent text-gray-500  hover:bg-primary-value hover:text-white-value whitespace-nowrap border-b-2 !px-4 !py-2 text-sm font-medium"
                    }
                  >
                    Life Cycle
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="details">
                  <div className="bg-white-value px-4 py-6 rounded-lg">
                    <div className="text-3 font-semibold mb-4">Details</div>
                    <div className="flex gap-8">
                      <div className="flex-1">
                        <div className="text-grey-500-value text-2 font-medium mb-3">
                          Specifications
                        </div>
                        <ul className="w-full border-b border-b-slate-100 pb-3">
                          <li className="flex items-center gap-[152px] mt-2 ">
                            <span className="text-grey-400-value text-1 min-w-[100px]">
                              Asset Cost
                            </span>
                            <span className="text-1">$1500</span>
                          </li>
                        </ul>
                        <ul className="w-full border-b border-b-slate-100 pb-3">
                          <li className="flex items-center gap-[152px] mt-2 ">
                            <span className="text-grey-400-value text-1 min-w-[100px]">
                              Manufacturer
                            </span>
                            <span className="text-1">Apple</span>
                          </li>
                        </ul>
                        <ul className="w-full border-b border-b-slate-100 pb-3">
                          <li className="flex items-center gap-[152px] mt-2 ">
                            <span className="text-grey-400-value text-1 min-w-[100px]">
                              Licences/serial #
                            </span>
                            <span className="text-1">YT434</span>
                          </li>
                        </ul>
                        <ul className="w-full border-b border-b-slate-100 pb-3">
                          <li className="flex items-center gap-[152px] mt-2">
                            <span className="text-grey-400-value text-1 min-w-[100px] ">
                              Model
                            </span>
                            <span className="text-1">2019 Late</span>
                          </li>
                        </ul>
                        <ul className="w-full border-b border-b-slate-100 pb-3">
                          <li className="flex items-center gap-[152px] mt-2">
                            <span className="text-grey-400-value text-1 min-w-[100px] ">
                              Model
                            </span>
                            <span className="text-1">2019 Late</span>
                          </li>
                        </ul>
                        <ul className="w-full border-b border-b-slate-100 pb-3">
                          <li className="flex items-center gap-[152px] mt-2">
                            <span className="text-grey-400-value text-1 min-w-[100px] ">
                              Model
                            </span>
                            <span className="text-1">2019 Late</span>
                          </li>
                        </ul>
                        <ul className="w-full border-b border-b-slate-100 pb-3">
                          <li className="flex items-center gap-[152px] mt-2">
                            <span className="text-grey-400-value text-1 min-w-[100px] ">
                              Model
                            </span>
                            <span className="text-1">2019 Late</span>
                          </li>
                        </ul>
                        <ul className="w-full border-b border-b-slate-100 pb-3">
                          <li className="flex items-center gap-[152px] mt-2">
                            <span className="text-grey-400-value text-1 min-w-[100px] ">
                              Model
                            </span>
                            <span className="text-1">2019 Late</span>
                          </li>
                        </ul>
                      </div>
                      <div className="flex-1">
                        <div className="text-grey-500-value text-2 font-medium mb-3">
                          Site Information
                        </div>
                        <ul className="w-full border-b border-b-slate-100 pb-3">
                          <li className="flex items-center gap-[152px] mt-2 ">
                            <span className="text-grey-400-value text-1 min-w-[100px]">
                              Primary Area
                            </span>
                            <span className="text-1">East Hall way</span>
                          </li>
                        </ul>
                        <ul className="w-full border-b border-b-slate-100 pb-3">
                          <li className="flex items-center gap-[152px] mt-2 ">
                            <span className="text-grey-400-value text-1 min-w-[100px]">
                              Secondary Area
                            </span>
                            <span className="text-1">Computer Lab Room 24</span>
                          </li>
                        </ul>
                        <div className="text-grey-500-value text-2 font-medium mb-3 mt-3">
                          Depreciation
                        </div>
                        <ul className="w-full border-b border-b-slate-100 pb-3">
                          <li className="flex items-center gap-[152px] mt-2">
                            <span className="text-grey-400-value text-1 min-w-[100px] ">
                              Depreciation Rate
                            </span>
                            <span className="text-1">25%/Year</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="work">
                  <div>tab2</div>
                </TabsContent>
                <TabsContent value="aa">
                  <div>tab3</div>
                </TabsContent>
                <TabsContent value="vaa">
                  <div>tab4</div>
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

export default AssetsDetails;
