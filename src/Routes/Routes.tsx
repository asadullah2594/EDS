import { FC } from "react";
import AddTeamMembers from "src/components/views/AddTeamMembers";
import AssetsDetails from "src/components/views/AssetDetails";
import AssetsListing from "src/components/views/AssetsListing";
import CreateNewSite from "src/components/views/CreateNewSite";
import SignUp from "src/components/views/SignUp";
import {
  ADD_TEAM_MEMBERS,
  ASSET_DETAILS,
  ASSETLISTING,
  CREATE_NEW_SITE,
} from "src/constants";

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
    title: "SignUp",
    path: "/",
    enabled: true,
    component: SignUp,
  },
  {
    key: "home-route",
    title: "Asset Listing",
    path: ASSETLISTING,
    enabled: true,
    component: AssetsListing,
  },
  {
    key: "home-route",
    title: "Asset Details",
    path: ASSET_DETAILS,
    enabled: true,
    component: AssetsDetails,
  },
  {
    key: "home-route",
    title: "Asset Details",
    path: ASSET_DETAILS,
    enabled: true,
    component: AssetsDetails,
  },
  {
    key: "home-route",
    title: "Asset Details",
    path: CREATE_NEW_SITE,
    enabled: true,
    component: CreateNewSite,
  },
  {
    key: "home-route",
    title: "Asset Details",
    path: ADD_TEAM_MEMBERS,
    enabled: true,
    component: AddTeamMembers,
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
