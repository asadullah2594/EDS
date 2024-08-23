import React from "react";
import footerLogo from "../../assets/footerLogo.svg";
import { ArrowRightIcon } from "../../assets/svg";
import linkedinLogo from "../../assets/linkedinLogo.svg";
import youtubeLogo from "../../assets/youtubeLogo.svg";

const Footer = () => {
  const footerItems = [
    {
      title: "Quick Links",
      items: [
        { name: "About us", link: "/about" },
        { name: "Why Emerald?", link: "/why-emerald" },
        { name: "Pricing", link: "/Pricing" },
        { name: "Blogs", link: "/Blogs" },
      ],
    },
    {
      title: "Solution",
      items: [
        { name: "Asset Management", link: "/solution/asset-management" },
        { name: "Site Management", link: "/solution/site-management" },
        { name: "Vendor Management", link: "/solution/vendor-management" },
        { name: "Purchase orders", link: "/solution/purchase-orders" },
        { name: "Activity orders", link: "/solution/activity-orders" },
        { name: "Reporting", link: "/solution/reporting" },
      ],
    },
    {
      title: "Use Case",
      items: [
        {
          name: "Maintenance Management Software",
          link: "/use-case/maintenance-management",
        },
        {
          name: "Inventory Management Software",
          link: "/use-case/inventory-management",
        },
        {
          name: "Vendor Management Software",
          link: "/use-case/vendor-management",
        },
        { name: "Forecasting", link: "/use-case/forecasting" },
      ],
    },
  ];

  return (
    <div className="bg-black  lg:pt-14 text-white" id="footer">
      <div className="container">
        <div className="flex justify-between flex-wrap">
          <div className="">
            <div className="lg:mt-0 mt-12 ">
              <img src={footerLogo} alt="footer-logo" />
              <p className="text-sm font-normal mt-6 font-inter max-w-[18rem] w-full text-[#B5B5B5] ">
                Emerald Data Solutions, LLC <br /> 6715 Portland Road Sandusky,
                OH 44870
              </p>
            </div>

            <div className="mt-10">
              <p className="text-base font-medium lg:leading-5 font-inter ">
                Join Wishlist
              </p>
              <p className="text-sm font-normal leading-5 font-inter text-[#B5B5B5] mt-2">
                Be the First to Experience Emerald!
              </p>
              <div className="flex gap-2 items-center mt-4">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-[15rem] bg-black   rounded-lg border-[1px] border-[#8f8f8f]   py-2 px-4 font-inter text-white  placeholder:text-white focus:ring-0 focus:ring-inset focus:outline-none hover:border-white focus:border-white sm:text-sm sm:leading-6"
                />
                <button className="bg-white px-3 py-3 rounded-xl">
                  <ArrowRightIcon color="black" />
                </button>
              </div>
            </div>

            <div className="flex  gap-3 mt-10">
              <a href="https://www.linkedin.com/company/emerald-data-solutions-llc/about/">
                <img src={linkedinLogo} alt="linkedin-logo" />
              </a>
              <a href="">
                <img src={youtubeLogo} alt="linkedin-logo" />
              </a>
            </div>
          </div>

          <div className="flex justify-between lg:flex-row flex-col lg:mt-0 mt-14">
            <div className="flex justify-between  md:flex-row flex-col md:flex-wrap gap-16">
              {footerItems.map((section, index) => (
                <div key={index}>
                  <h3 className="text-base font-medium leading-5 font-inter">
                    {section.title}
                  </h3>
                  <ul className="mt-6 flex flex-col gap-4 ">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href={item.link}
                          className="text-sm font-normal text-[#B5B5B5] font-inter"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-8 w-full h-[0.0625rem]"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #EEEEF0 50%, rgba(239, 239, 241, 0.00) 100%)",
          }}
        ></div>

        <div className="mt-6 flex justify-between pb-6 flex-wrap gap-3">
          <p className="text-sm font-normal font-inter">support@eds.co</p>
          <p className="text-sm font-normal font-inter">
            © 2024 Emerald Data Solutions. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
