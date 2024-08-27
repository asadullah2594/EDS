import { FC } from "react";
import AssetsListing from "src/components/views/AssetsListing";
import SignUp from "src/components/views/SignUp";

export interface IRoute {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC<{}>;
}

export const Routes: Array<IRoute> = [
  {
    key: "home-route",
    title: "SignUo",
    path: "/",
    enabled: true,
    component: SignUp,
  },
  {
    key: "home-route",
    title: "Asset Listing",
    path: "/assetlisting",
    enabled: true,
    component: AssetsListing,
  },
  // {
  //   key: "home-route",
  //   title: "Home",
  //   path: "/details",
  //   enabled: true,
  //   component: GrevanceDetails,
  // },
  // {
  //     key: 'about-route',
  //     title: 'About',
  //     path: '/about',
  //     enabled: true,
  //     component: About
  // }
];
