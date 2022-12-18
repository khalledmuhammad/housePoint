import axios from "axios";
import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Home4 from "../components/home-4";

const index = ({ Properties }) => {
  return (
    <>
      <Seo pageTitle="House point" />
      <Home4 Properties={Properties} />
    </>
  );
};

export async function getServerSideProps() {
  const apiUrlEndpoint = `${process.env.NEXT_PUBLIC_API}`;
  const { data } = await axios.get(apiUrlEndpoint);
  return {
    props: {
      Properties: data,
    },
  };
}
export default dynamic(() => Promise.resolve(index), { ssr: false });
