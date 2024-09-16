import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResourceListing from "src/components/views/ResourceListing";
import LottieLoader from "src/loader/LottieLoader";
import { setLoading, toastify } from "src/redux/slices/userSlice";
import { GetVendersService } from "src/services/services";
const tabs = [
  { id: 1, name: "Team Members", href: "#", current: true },
  { id: 2, name: "Vendors", href: "#", current: false },
];

const ResourceListingContainer = () => {
  const tenant = useSelector((state: any) => state.user.tenant);
  const loading = useSelector((state: any) => state.user.loading);
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const [venderData, setVenderData] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedTab === 2) {
      getVenders();
    }
  }, [selectedTab]);

  const getVenders = async () => {
    try {
      dispatch(setLoading(true));
      let res = await GetVendersService(tenant);
      if (res.status === 200) {
        setVenderData(res.data.data);
      }
    } catch (e) {
      console.log(e);
      toastify("error", e?.response?.data?.data?.error);
    }
  };

  return (
    <>
      {loading ? (
        <LottieLoader />
      ) : (
        <ResourceListing
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          tabs={tabs}
        />
      )}
    </>
  );
};

export default ResourceListingContainer;
