import { FC } from "react";
import AddNewVendor from "src/components/views/AddNewVendor";
import AddTeamMembers from "src/components/views/AddTeamMembers";
import AssetsDetails from "src/components/views/AssetDetails";
import AssetsListing from "src/components/views/AssetsListing";
import CreateNewSite from "src/components/views/CreateNewSite";
import ResourceListing from "src/components/views/ResourceListing";
import SetupProfile from "src/components/views/SetUpProfile/SetupProfile";
import SignUp from "src/components/views/SignUp";
import TeamMemberDetails from "src/components/views/TeamMemberDetails";
import VendorCard from "src/components/views/VendorCard";
import {
  ADD_TEAM_MEMBERS,
  ADD_VENDER,
  ASSET_DETAILS,
  ASSETLISTING,
  CREATE_NEW_SITE,
  RESOURCE_DETAILS,
  RESOURCE_LISTING,
  ROUTE_LOGIN,
  VENDER_DETAILS,
} from "src/constants";
import LoginContainer from "src/containers/LoginContainer";
import ResourceListingContainer from "src/containers/ResourceListingContainer";
import SetUpProfileContainer from "src/containers/SetUpProfileContainer";
import SignUpContaier from "src/containers/SignUpContainer";

export interface IRoute {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  protected: boolean;
  component: FC<{}>;
}

export const Routes: Array<IRoute> = [
  {
    key: "home-route",
    title: "SignUp",
    path: "/",
    enabled: true,
    component: SignUpContaier,
    protected: false,
  },
  {
    key: "setup-profile",
    title: "Setup Profile",
    path: "/sign-up",
    enabled: true,
    component: SetUpProfileContainer,
    protected: false,
  },
  {
    key: "home-route",
    title: "Resource Details",
    path: RESOURCE_LISTING,
    enabled: true,
    component: ResourceListingContainer,
    protected: true,
  },
  {
    key: "home-route",
    title: "Asset Listing",
    path: ASSETLISTING,
    enabled: true,
    component: AssetsListing,
    protected: true,
  },
  {
    key: "home-route",
    title: "Asset Listing",
    path: ROUTE_LOGIN,
    enabled: true,
    component: LoginContainer,
    protected: true,
  },
  // {
  //   key: "home-route",
  //   title: "Asset Details",
  //   path: ASSET_DETAILS,
  //   enabled: true,
  //   component: AssetsDetails,
  // },

  // {
  //   key: "home-route",
  //   title: "Asset Details",
  //   path: CREATE_NEW_SITE,
  //   enabled: true,
  //   component: CreateNewSite,
  // },
  // {
  //   key: "home-route",
  //   title: "Asset Details",
  //   path: ADD_VENDER,
  //   enabled: true,
  //   component: AddNewVendor,
  // },
  // {
  //   key: "home-route",
  //   title: "Asset Details",
  //   path: ADD_TEAM_MEMBERS,
  //   enabled: true,
  //   component: AddTeamMembers,
  // },
  // {
  //   key: "home-route",
  //   title: "Asset Details",
  //   path: VENDER_DETAILS,
  //   enabled: true,
  //   component: VendorCard,
  // },

  // {
  //   key: "home-route",
  //   title: "Asset Details",
  //   path: RESOURCE_DETAILS,
  //   enabled: true,
  //   component: TeamMemberDetails,
  // },
];
