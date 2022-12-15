import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import AllProperties from "../../components/AllProperties/AllProperties";

const index = () => {
     
  return (
    <>
      <Seo pageTitle="Simple Listing – Grid V1" />
      <AllProperties />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
