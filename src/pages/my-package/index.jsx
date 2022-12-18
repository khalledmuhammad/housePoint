import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import MyPackage from "../../components/dashboard/my-package";

const index = () => {
  return (
    <>
      <Seo pageTitle="My Package" />
      <MyPackage />
    </>
  );
};

export default index;
