import BlogSidebar from "../../components/common/blog/BlogSidebar";
import Pagination from "../../components/common/blog/Pagination";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/DefaultHeader";
import MobileMenu from "../../components/common/header/MobileMenu";
import PopupSignInUp from "../../components/common/PopupSignInUp";
import BreadCrumbBlog from "./BreadCrumbBlog";
import Blog from "./Blog";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Main Blog Post Content --> */}
      <section className="blog_post_container bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <BreadCrumbBlog />
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-8">
              <div className="main_blog_post_content">
                <Blog />
                {/* End blog item */}

                <div className="mbp_pagination mt20">
                  <Pagination />
                </div>
                {/* End .mbp_pagination */}
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-4 col-xl-4">
              <BlogSidebar />
            </div>
            {/* End Sidebar column */}
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
  );
};

export async function getServerSideProps({params}) {
  const apiUrlEndpoint = ` ${process.env.NEXT_PUBLIC_API}/getblogs`;
  const { data } = await axios.get(apiUrlEndpoint);
  
  return {
    props: {
      Properties: data,
    },
  };
}


export default index;
