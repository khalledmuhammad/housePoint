import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import PropertyDetails from "./PropertyDetails";


const DetailsContent = ({Properties}) => {
  const router = useRouter()
  const {t} = useTranslation()
  return (
    <>
      <div className="listing_single_description ">
        <div className="bgc-darkBrown p-3">
        <h4 className="text-white ">{t("DESC")}</h4>
        </div>
        <p className="mb25 p-2">
        { Properties.Title && router.locale === "ar" ? Properties.titlear : Properties.Title}
      </p>
      </div>
      {/* End .listing_single_description */}

      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">{t("PROPDETAILS")}</h4>
          </div>
          <PropertyDetails Properties={Properties} />
        </div>
      </div>
      {/* End .additional_details */}


      <div className="product_single_content">
        <div className="mbp_pagination_comments mt30">
      
          <div className="custom_hr"></div>

     {/*      <div className="mbp_comment_form style2">
            <h4>Write a Review</h4>
            <ul className="review_star">
              <li className="list-inline-item">
                <span className="sspd_review">
                  <ul>
                    <Ratings />
                  </ul>
                </span>
              </li>
              <li className="list-inline-item pr15">
                <p>Your Rating & Review</p>
              </li>
            </ul>
            <ReviewBox />
          </div> */}
        </div>
      </div>
      {/* End review and comment area area */}
    </>
  );
};

export default DetailsContent;
