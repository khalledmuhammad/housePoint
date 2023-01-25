import { useTranslation } from "react-i18next";
import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import AddressSidebar from "./AddressSidebar";
import BreadCrumbBanner from "./BreadCrumbBanner";
import Form from "./Form";
import { useRouter } from "next/router";

const Index = () => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Our Contact --> */}
      <section
        className="our-contact pb0 bgc-f7 mt-5"
        dir={router.locale === "en" ? "" : "rtl"}
      >
        <div className="container">
          <h1 className="mb5 text-center">{t("CONTACTUS")}</h1>
          <div className="row">
            <div className="col-lg-7 col-xl-8">
              <div className="form_grid">
                <Form />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-5 col-xl-4">
              <AddressSidebar />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div className="container-fluid p0 mt50">
          <div className="row">
            <div className="col-lg-12">
              <div className="h600" id="map-canvas">
                <div className="gmap_canvas pe-none">
                
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216.06024675745567!2d31.265611999999997!3d29.9517156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583807cabfbd7d%3A0x81e98f6ddff99809!2sHouse%20Point%20Egypt!5e0!3m2!1sen!2seg!4v1674645724966!5m2!1sen!2seg"
                    width="600"
                    height="450"
                    style={{border:0}}
                    allowfullscreen={true}
                    loading="lazy"
                    title="map"
                    className="gmap_iframe"

                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                  {/* End iframe */}

                  <img
                    className="location-finder"
                    src="assets/images/location.png"
                    alt="location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Start Call to Action --> */}

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

export default Index;
