import axios from "axios";
import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Home4 from "./home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useDispatch } from "react-redux";
import { setAllProp } from "../features/properties/propertiesSlice";
import { useEffect } from "react";

const index = ({ Properties,ForBuy, LatestBlogs }) => {
const dispatch = useDispatch()

useEffect(() => {
  dispatch(setAllProp(Properties))
}, [])


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
    fetch(`${process.env.NEXT_PUBLIC_API}/`),
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
