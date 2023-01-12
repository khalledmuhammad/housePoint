import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import CopyrightFooter from "../../../../../../components/common/footer/CopyrightFooter";
import Footer from "../../../../../../components/common/footer/Footer";
import Header from "../../../../../../components/common/header/DefaultHeader";
import MobileMenu from "../../../../../../components/common/header/MobileMenu";
import PopupSignInUp from "../../../../../../components/common/PopupSignInUp";
import DetailsContent from "./DetailsContent";
import Sidebar from "../../../../../../components/singleProperty/Sidebar";
import axios from "axios";
import NotFound from "../../../../../../components/404";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { ShareSocial } from "react-share-social";
import BreadCrumb2 from "./BreadCrumb2";
import WhatsAppButton from "../../../../../../components/Whatsapp/whatsapp";

const ListingDynamicDetailsV1 = ({ Properties }) => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1500,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const router = useRouter();
  const [property, setProperty] = useState(Properties);
  const id = router.query.id;
  const { t } = useTranslation();

  const [image, setImage] = useState();

  useEffect(() => {
    async function getImageData() {
      const apiUrlEndpoint = ` ${process.env.NEXT_PUBLIC_API}/image/${property.Id_property}`;
      const { data } = await axios.get(apiUrlEndpoint);
      setImage(data);
    }
    getImageData();
  }, [id]);

  if (Properties) {
    return (
      <>
        {/* <!-- Main Header Nav --> */}
        <Header />

        {/* <!--  Mobile Menu --> */}
        <MobileMenu />

        {/* <!-- Modal --> */}
        <PopupSignInUp />

        {/* <!-- Listing Single Property --> */}
        <section
          className="listing-title-area mt85 md-mt0"
          dir={`${router.locale === "ar" ? "rtl" : ""}`}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <BreadCrumb2
                  PropType={router.query.type}
                  Slug={`  ${
                    router.locale === "ar" ? property.slug_ar : property.slug_en
                  }`}
                  Title={`   ${
                    router.locale === "ar" ? property.titlear : property.Title
                  }`}
                />
              </div>
            </div>
            <Gallery>
              <div className="row mb30 p-3 bgc-darkBrown">
                <div className="col-lg-7 col-xl-8">
                  <div className="single_property_title mt30-767  ">
                    <h2 className="text-white">
                      {" "}
                      {router.locale === "ar"
                        ? property.titlear
                        : property.Title}{" "}
                    </h2>
                    <p className="text-white">
                      {router.locale == "ar"
                        ? `${property.namear} , ${property.name2ar}`
                        : `  ${property.name} ,${property.name2} `}
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 col-xl-4">
                  <div className="single_property_social_share position-static transform-none">
                    <div className="price float-start fn-400 ">
                      <h2 className="text-white">
                        {router.locale === "ar"
                          ? property.Property_for === "Rent"
                            ? `${property.Price} ${
                                property.Price_ex === "EGP" ? "جم" : "دولار"
                              } / شهر `
                            : `${property.Price} ${
                                property.Price_ex === "EGP" ? "جم" : "دولار"
                              }`
                          : router.locale === "en" &&
                            property.Property_for === "Rent"
                          ? `${property.Price} ${
                              property.Price_ex === "EGP" ? "Egp" : "Usd"
                            }/month  `
                          : `${property.Price} ${
                              property.Price_ex === "EGP" ? "Egp" : "Usd"
                            }`}
                      </h2>
                      <p className="text-white">
                        {t("AD")}: #{property.Id_property}
                      </p>
                    </div>

                    {/* End activity and social sharing */}
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-sm-7 col-lg-8">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="spls_style_two mb30-520">
                        <Item
                          original={`https://housepointegypt.com/photos/${
                            image && image[0].file_image
                          }`}
                          thumbnail={`https://housepointegypt.com/photos/${
                            image && image[0].file_image
                          }`}
                          width={752}
                          height={450}
                        >
                          {({ ref, open }) => (
                            <div role="button" ref={ref} onClick={open}>
                              <img
                                className="img-fluid w100 cover lds-1"
                                src={`https://housepointegypt.com/photos/${
                                  image && image[0].file_image
                                }`}
                                alt="1.jpg"
                              />
                            </div>
                          )}
                        </Item>
                      </div>
                      <div className="col-lg-12 bgc-darkBrown mb-2">
                        <ul className="mb0 p-2 ">
                          <li className="list-inline-item ">
                            <a href="#" className="text-white">
                              <i className="fa fa-home px-2 "></i>
                              {Properties && router.locale === "ar"
                                ? Properties.type_ar
                                : Properties.type_en}
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="text-white">
                              <i className="fa fa-bed px-2 "></i>
                              {t("BEDS")}:{" "}
                              {Properties && Properties.No_of_bedrooms}{" "}
                            </a>
                          </li>
                          <li className="list-inline-item mx-3">
                            <a href="#" className="text-white">
                              <i className="fa fa-bath px-2 "></i>
                              {t("BATHS")}:{" "}
                              {Properties && Properties.No_of_bathrooms}{" "}
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="text-white">
                              <i className="fa fa-home px-2 "></i>
                              Sq Ft: {Properties && Properties.Surface_area}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End .col-sm-7 .col-lg-8 */}

                <div className="col-sm-5 col-lg-4">
                  <div className="row Scroll_images ">
                    {image?.map((val, i) => (
                      <div className="col-6" key={i}>
                        <div className="spls_style_two img-gallery-box mb24">
                          <Item
                            original={`https://housepointegypt.com/photos/${val.file_image}`}
                            thumbnail={`https://housepointegypt.com/photos/${val.file_image}`}
                            width={752}
                            height={450}
                          >
                            {({ ref, open }) => (
                              <div role="button" ref={ref} onClick={open}>
                                <img
                                  className="img-fluid w100"
                                  src={`https://housepointegypt.com/photos/${val.file_image}`}
                                  alt="2.jpg"
                                />
                              </div>
                            )}
                          </Item>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* End  col-sm-5 col-lg-4 */}
              </div>
              {/* End .row */}
            </Gallery>
          </div>
        </section>

        {/* <!-- Agent Single Grid View --> */}
        <section
          className="our-agent-single bgc-f7 pb30-991"
          dir={`${router.locale === "ar" ? "rtl" : ""}`}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <DetailsContent Properties={property} />
              </div>
              {/* End details content .col-lg-8 */}

              <div className="col-lg-4 col-xl-4">
                <h4 className="bgc-darkBrown text-white p-3">{t("SHARE")}</h4>
                <ShareSocial
                  url={process.browser && window.location.href}
                  socialTypes={["facebook", "twitter", "linkedin"]}
                  style={{
                    height: "100px",
                    overflow: "hidden",
                    background: "none",
                    textAlign: "center",
                  }}
                />
                <div className="col-lg-4 col-xl-4 w-100 bg-white">
                  <h4 className="bgc-darkBrown text-white p-3 d-flex">
                    {t("CONTACT")}
                  </h4>

                  <WhatsAppButton />
                </div>

                <Sidebar />
              </div>
              {/* End sidebar content .col-lg-4 */}
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
  } else {
    return <NotFound />;
  }
};

export async function getServerSideProps({ params, locale }) {
  const apiUrlEndpoint = ` ${process.env.NEXT_PUBLIC_API}/prop/${params.id}`;
  const { data } = await axios.get(apiUrlEndpoint);

  return {
    props: {
      Properties: data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default ListingDynamicDetailsV1;
