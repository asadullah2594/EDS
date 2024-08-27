import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import siteLogo from "../../assets/siteLogo.svg";
import { Bell, DownArrow } from "../../assets/svg";
import Avatar from "../../assets/avatar.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useLocation, useNavigate } from "react-router-dom";
import { ASSETLISTING } from "src/constants";

// import { ArrowRightIcon } from "../../assets/svg";
// import Button from "../common/Button";

const menuItems = [
  { id: 1, title: "Dashboard", href: "#solutions" },
  { id: 2, title: "Assets", href: ASSETLISTING },
  { id: 3, title: "Maintenance", href: "#industries" },
  { id: 4, title: "Site Overview", href: "#eds" },
  { id: 4, title: "Resource Oversight", href: "#eds" },
  { id: 4, title: "Purchase Orders", href: "#eds" },
  { id: 4, title: "Reports", href: "#eds" },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Disclosure
      as="nav"
      className=" border-b  border-[#E5E7EB] sticky top-0  z-10 px-6 py-4 bg-[#f8f9fa] "
    >
      <div>
        <div className="flex  justify-between">
          <div className="flex gap-[0.58rem] items-center">
            <img src={siteLogo} alt="site-logo" />
          </div>
          <div className="flex">
            <div className="hidden sm:gap-2 sm:flex ">
              {menuItems.map((item) => (
                <a
                  onClick={() => {
                    navigate(item.href);
                  }}
                  key={item.id}
                  className={`inline-flex items-center p-3 text-1 font-normal  text-gray-500  border-b-2 border-transparent hover:bg-primary-value hover:text-white-value rounded-lg transition-all duration-300 cursor-pointer ${
                    location.pathname == ASSETLISTING &&
                    item.title == "Assets" &&
                    "!bg-primary-value text-white-value"
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center gap-4">
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div>
                    <Bell className="w-9 h-9" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="!bg-white-value !text-black-value  !ring-0 !border-0"
                >
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
            </div>
            <img src={Avatar} />
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div>
                    <DownArrow />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="!bg-white-value !text-black-value  !ring-0 !border-0"
                >
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
            </div>
          </div>

          {/* <div className="-mr-2 flex items-center sm:hidden">
       
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none bg-white ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only font-inter">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div> */}
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pb-3 pt-2">
          {menuItems.map((item) => (
            <DisclosureButton
              key={item.id}
              as="a"
              href={item.href}
              className="block border-l-4 border-transparent py-2 pl-3 pr-4  font-inter text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              {item.title}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Header;
