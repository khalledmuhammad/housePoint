import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Contact from "../components/contact";

const index = () => {
  return (
    <>
      <Seo pageTitle="Contact" />
      <Contact />
    </>
  );
};


export async function getServerSideProps({ locale }) {



  return {
    props: {
 
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default index;
