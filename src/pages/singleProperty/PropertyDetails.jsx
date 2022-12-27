import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const PropertyDetails = ({Properties}) => {
  const {t} = useTranslation()
  const router = useRouter()
  return (
    <>
      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              id: <span>{Properties.Id_property}</span>
            </p>
          </li>
          <li>
            <p>
              {t("PRICE")} : <span> {Properties.Price} {Properties.Price_ex} </span>
            </p>
          </li>
          <li>
            <p>
              {t("PROPSIZE")} : <span>{Properties.Surface_area} Sq Ft</span>
            </p>
          </li>
         
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
            {t("BEDS")} : <span>{Properties.No_of_bedrooms ? Properties.No_of_bedrooms : 0}</span>
            </p>
          </li>
          <li>
            <p>
            {t("BATHS")} : <span>{Properties.No_of_bathroom ? Properties.No_of_bathroom  : 0}</span>
            </p>
          </li>
          <li>
            <p>
            {t("FURNISHED")} : <span>{ router.locale === "ar" ?  Properties.ff_ar : Properties.ff_en}</span>
            </p>
          </li>
          <li>
            <p>
            {t("PROPFOR")} : <span>{ router.locale === "ar" ?  Properties.type_ar : Properties.type_en}</span>
            </p>
          </li>
         
          
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
            {t("PROPSTATUS")} : <span>For Sale</span>
            </p>
          </li>
          <li>
            <p>
              {t("PROPDATA")} : <span>{Properties.Date}</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PropertyDetails;
