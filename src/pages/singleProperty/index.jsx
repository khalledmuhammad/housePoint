import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import SingleProperty from "../../components/singleProperty";

const index = () => {
  return (
    <>
      <Seo pageTitle="Listing Single – Details V1" />
      <SingleProperty />
    </>
  );
};

export default index;
