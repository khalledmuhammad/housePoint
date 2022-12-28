import axios from "axios";
import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Home4 from "./home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const index = ({ Properties,ForBuy, LatestBlogs }) => {
  return (
    <>
      <Seo pageTitle="House point" />
      <Home4
        Properties={Properties}
        ForBuy={ForBuy}
        LatestBlogs={LatestBlogs}
      />
    </>
  );
};

export async function getServerSideProps({ locale }) {
  const [apiUrlEndpoint, apiUrlForBuy, apiUrlLatesBlogs] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API}/home`),
    fetch(`${process.env.NEXT_PUBLIC_API}/for-sale`),
    fetch(`${process.env.NEXT_PUBLIC_API}/blogs`),
  ]);

  const [data, ForBuy, LatestBlogs] =  await Promise.all([
    apiUrlEndpoint.json(),
    apiUrlForBuy.json(),
    apiUrlLatesBlogs.json(),
  ]);

  return {
    props: {
      Properties: data,
      ForBuy :ForBuy,
      LatestBlogs,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export default dynamic(() => Promise.resolve(index), { ssr: false });
