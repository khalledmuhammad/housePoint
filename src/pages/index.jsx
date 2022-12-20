import axios from "axios";
import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Home4 from "./home-4";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


const index = ({ Properties }) => {
  return (
    <>
      <Seo pageTitle="House point" />
      <Home4 Properties={Properties} />
    </>
  );
};

export async function getServerSideProps({locale}) {
  const apiUrlEndpoint = `${process.env.NEXT_PUBLIC_API}/home`;
  const { data } = await axios.get(apiUrlEndpoint);
  return {
    props: {
      Properties: data,
      ...(await serverSideTranslations(locale, ["common"])),

    },
  };
}
export default dynamic(() => Promise.resolve(index), { ssr: false });
