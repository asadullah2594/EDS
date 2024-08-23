import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import siteLogo from "../../assets/siteLogo.svg";
// import { ArrowRightIcon } from "../../assets/svg";
// import Button from "../common/Button";

const menuItems = [
  { id: 1, title: "Soutions", href: "#solutions" },
  { id: 2, title: "Features", href: "#features" },
  { id: 3, title: "Industries", href: "#industries" },
  { id: 4, title: "Why EDS", href: "#eds" },
];

const Header = () => {
  return (
    <Disclosure
      as="nav"
      className=" border-b border-gray-50 sticky top-0  z-10 px-6 py-4 bg-[#f8f9fa]"
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
                  href={item.href}
                  key={item.id}
                  className="inline-flex items-center p-3 text-sm font-normal font-inter text-gray-600  border-b-2 border-transparent hover:border-green-500 transition-all duration-300"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div>bell</div>
            <div>bell</div>
            <div>bell</div>
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
