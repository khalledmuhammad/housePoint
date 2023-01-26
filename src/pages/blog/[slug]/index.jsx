import axios from "axios";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BreadCrumb2 from "./BreadCrumbBlog";
import Comments from "../../../components/blog-details/Comments";
import Pagination from "../../../components/blog-details/Pagination";
import Ratings from "../../../components/blog-details/Ratings";
import RelatedPost from "../../../components/blog-details/RelatedPost";
import ReviewBox from "../../../components/blog-details/ReviewBox";
import BlogSidebar from "../../../components/common/blog/BlogSidebar";
import CopyrightFooter from "../../../components/common/footer/CopyrightFooter";
import Footer from "../../../components/common/footer/Footer";
import Social from "../../../components/common/footer/Social";
import Header from "../../../components/common/header/DefaultHeader";
import MobileMenu from "../../../components/common/header/MobileMenu";
import PopupSignInUp from "../../../components/common/PopupSignInUp";
import Seo from "../../../components/common/seo";
import blogs from "../../../data/blogs";
import parse from "html-react-parser";

const BlogDetailsDynamic = ({ data }) => {
  const router = useRouter();
  const [blog, setBlogItem] = useState();

  const id = router.query.id;

  useEffect(() => {
    setBlogItem(data);
  }, [data]);

  console.log(blog)
 


  if (!blog) {
    return <h1>Loading...</h1>;
  }

  else
{  return (
    <>
      <Seo pageTitle={"Blog Details"} />
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Main Blog Post Content --> */}
      <section className="blog_post_container bgc-f7 bgc-white">

        <div className="container">

          <div className="row">
            <div className="col-xl-6">
              <BreadCrumb2     Title={`   ${
                    router.locale === "ar" ? parse(data.tit2) : parse(data.tit1)
                  }`} />
            </div>
          </div>

          <img className="img-whp w-100 m-3" src={`https://housepointegypt.com/imgs/${data.img}`} alt={data.img} />
          <div className="row">

            {router.locale === "ar" ? (
              <div dir="rtl">
                <h2>{parse(data.tit2)}</h2>
                {parse(data.txt2)}{" "}
              </div>
            ) : (
              <>
                {" "}
                <h2>{parse(data.tit1)}</h2>
                {parse(data.txt)}
              </>
            )}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );}
};

export async function getServerSideProps({ params, locale ,req  }) {

  const apiUrlEndpoint = `${process.env.NEXT_PUBLIC_API}/blogsen/${params.slug}`;
  const { data } = await axios.get(apiUrlEndpoint);
  return {
    props: {
      data: data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default BlogDetailsDynamic;
