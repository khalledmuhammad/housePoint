import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const PropertyItem = ({Properties}) => {

  const router = useRouter()
  const {t} = useTranslation()
  return (
    <ul className="mb0">
      <li className="list-inline-item">
        <a href="#">{ Properties && router.locale === "ar" ? Properties.type_ar  : Properties.type_en}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">{t("BEDS")}:  { Properties && Properties.No_of_bedrooms} </a>
      </li>
      <li className="list-inline-item mx-3">
        <a href="#">{t("BATHS")}:  { Properties && Properties.No_of_bathrooms}  </a>
      </li>
      <li className="list-inline-item">
        <a href="#">Sq Ft: { Properties && Properties.Surface_area}</a>
      </li>
    </ul>
  );
};

export default PropertyItem;
