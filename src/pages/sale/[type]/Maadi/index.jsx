import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import Footer from "../../../../components/common/footer/Footer";
import Header from "../../../../components/common/header/DefaultHeader";
import MobileMenu from "../../../../components/common/header/MobileMenu";
import FilterTopBar from "../../../../components/common/listing/FilterTopBar";
import GridListButton from "../../../../components/common/listing/GridListButton";
import ShowFilter from "../../../../components/common/listing/ShowFilter";
import SidebarListing from "../../../../components/common/listing/SidebarListing";
import PopupSignInUp from "../../../../components/common/PopupSignInUp";
import BreadCrumb2 from "./BreadCrumb2";
import FeaturedItem from "../../../AllProperties/FeaturedItem";

import dynamic from "next/dynamic";
import Seo from "../../../../components/common/seo";
import axios from "axios";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

const Index = ({ data }) => {
  const router = useRouter();

  return (
    <>
  <Seo 
      pageTitle={ router.locale === "ar" ? `${router.query.type} للبيع في المعادي مصر | House Point ` :`${router.query.type} For sale In maadi, Egypt | House Point` }
      pageDesc={router.locale === "ar" ?`شقق وفيلات فاخره للبيع اذا كنت تبحث علي ${router.query.type} للبيع في المعادي فبادر بالتجربه مع شركه هاوس بوينت للحصول علي افضل ال${router.query.type} بافضل الاسعار`  : `more properties for sale in maadi, cairo, egypt. house point real estate in maadi we will help you to find excellent properties apartments, homes, villas to sale in maadi `}
      
      />
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Listing Grid View --> */}
      <section
        className="our-listing bgc-f7 pb30-991 mt85 md-mt0 "
        dir={`${router.locale === "ar" ? "rtl" : ""}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <BreadCrumb2 length={data?.length} PropType={router.query.type} />
            </div>
            {/* End .col */}

            <div className="col-lg-6 position-relative">
              <div className="listing_list_style mb20-xsd tal-991">
                <GridListButton />
              </div>
              {/* End list grid */}

              <div className="dn db-991 mt30 mb0">
                <ShowFilter />
              </div>
              {/* ENd button for mobile sidebar show  */}
            </div>
            {/* End .col filter grid list */}
          </div>
          {/* End Page Breadcrumb and Grid,List and filter Button */}

          <div className="row">
            <div className="col-lg-4 col-xl-4">
              <div className="sidebar-listing-wrapper">
                <SidebarListing />
              </div>
              {/* End SidebarListing */}

              <div
                className="offcanvas offcanvas-start offcanvas-listing-sidebar"
                tabIndex="-1"
                id="sidebarListing"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title">Advanced Search</h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                {/* End .offcanvas-heade */}

                <div className="offcanvas-body">
                  <SidebarListing />
                </div>
              </div>
              {/* End mobile sidebar listing  */}
            </div>
            {/* End sidebar conent */}

            <div className="col-md-12 col-lg-8">
              <div className="grid_list_search_result ">
                <div className="row align-items-center">
                  <FilterTopBar SALE={true} />
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <FeaturedItem data={data} />
              </div>
              {/* End .row */}

              <div className="row">
                {/* <div className="col-lg-12 mt20">
                  <div className="mbp_pagination">
                    <Pagination />
                  </div>
                </div> */}
                {/* End paginaion .col */}
              </div>
              {/* End .row */}
            </div>
            {/* End  page conent */}
          </div>
          {/* End .row */}
        </div>
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

export async function getServerSideProps({ locale, query }) {
  const apiUrlEndpoint = `${process.env.NEXT_PUBLIC_API}/Property/Sale/Maadi/${query.type}`;
  const { data } = await axios.get(apiUrlEndpoint);
  return {
    props: {
      data: data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export default Index;
