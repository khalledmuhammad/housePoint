import Blogs from "../../components/common/Blogs";
import GlobalHeroFilter from "../../components/common/GlobalHeroFilter";
import FeaturedProperties from "./FeaturedProperties";
import FindProperties from "./FindProperties";
import FeaturedPropertiesForSale from "./FeaturedPropertiesForSale";
import FeaturedPropertiesLatestBlogs from "./FeaturedPropertiesLatestBlogs";

import HeroSlider from "./HeroSlider";
import LookingItem from "./LookingItem";
import Team from "./Team";

import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Index = ({ Properties, ForBuy, LatestBlogs }) => {
  const router = useRouter();
  const { t } = useTranslation("");

  return (
    <>
      <Layout>
        {/* <!-- 4th Home Slider --> */}
        <div className="home-four ">
          <div className="container-fluid p0">
            <div className="main-banner-wrapper">
              <div className="arrow-style-2 banner-style-one ">
                <HeroSlider />
              </div>
            </div>
            {/* <!-- /.main-banner-wrapper --> */}
          </div>
          {/* End .container-fluid */}

          <div className="container home_iconbox_container">
            <div className="row posr">
              <div className="col-lg-12">
                <div className="home_content home4">
                  <div className="home-text text-center">
                    <h2 className="fz55 ">{t("FINDHOME")}</h2>
                  </div>
                  <GlobalHeroFilter className="home4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <h4 className="text-center color-white fw600 mb25 mb0-520">
                  {t("LOOKINGFOR")}
                </h4>
                <ul className="home4_iconbox mb0">
                  <LookingItem />
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Property Cities --> */}
        <section id="best-property" className="best-property bgc-f7">
          <div className="container ovh">
            <div className="row">
              <div className="col-lg-12 ">
                {/* -----------latest properties ------------------------------ */}

                <div
                  className="main-title text-center mb40"
                  dir={`${router.locale === "ar" ? "rtl" : ""}`}
                >
                  <h2>{t("FEATUREDPROPS")}</h2>
                  <h3>
                    <i className="fa fa-bookmark"></i> {t("RECENTPROPS")}
                  </h3>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="best_property_slider gutter-x15">
                  <FeaturedProperties Properties={Properties} />
                </div>
              </div>
            </div>

            {/* -----------latest for buy ------------------------------ */}
            <br />
            <hr />
            <br />
            <div
              className="main-title text-center mb40"
              dir={`${router.locale === "ar" ? "rtl" : ""}`}
            >
              <h3>
                <i className="fa fa-bookmark"></i> {t("RECENTBUY")}
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="best_property_slider gutter-x15">
                  <FeaturedPropertiesForSale Properties={ForBuy} />
                </div>
              </div>
            </div>
            {/* -----------latest blogs ------------------------------ */}
            <br />
            <hr />
            <br />

            <div
              className="main-title text-center mb40"
              dir={`${router.locale === "ar" ? "rtl" : ""}`}
            >
              <h3>
                <i className="fa fa-bookmark"></i> {t("RECENTBLOGS")}
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="best_property_slider gutter-x15">
                  <FeaturedPropertiesLatestBlogs Properties={LatestBlogs} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Property Cities --> */}
        <section id="property-city" className="property-city pb30">
          <div className="container">
            <div className="row">
              <FindProperties />
            </div>
          </div>
        </section>
      </Layout>
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

export default Index;
