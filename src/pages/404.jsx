import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import NotFound from "../components/404";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const index = () => {
  return (
    <>
      <Seo pageTitle="404 Not Found" />
      <NotFound />
    </>
  );
};

export async function getStaticProps({ locale }) {



  return {
    props: {
 
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}


export default index;
