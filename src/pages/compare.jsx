import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Compare from "../components/compare";

const index = () => {
  return (
    <>
      <Seo pageTitle="Compare" />
      <Compare />
    </>
  );
};

export default index;
