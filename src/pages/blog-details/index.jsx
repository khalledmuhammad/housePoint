import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import BlogDetails from "../../components/blog-details";

const index = () => {
  return (
    <>
      <Seo pageTitle="Blog Details" />
      <BlogDetails />
    </>
  );
};

export default index;
