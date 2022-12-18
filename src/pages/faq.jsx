import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Faq from "../components/faq";

const index = () => {
  return (
    <>
      <Seo pageTitle="Faq" />
      <Faq />
    </>
  );
};

export default index;
