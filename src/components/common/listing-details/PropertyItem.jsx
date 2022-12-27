import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const PropertyItem = ({property}) => {

  const router = useRouter()
  const {t} = useTranslation()
  return (
    <ul className="mb0">
      <li className="list-inline-item">
        <a href="#">{ property && router.locale === "ar" ? property.type_ar  : property.type_en}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">{t("BEDS")}:  { property && property.No_of_bedrooms} </a>
      </li>
      <li className="list-inline-item mx-3">
        <a href="#">{t("BATHS")}:  { property && property.No_of_bathrooms}  </a>
      </li>
      <li className="list-inline-item">
        <a href="#">Sq Ft: { property && property.Surface_area}</a>
      </li>
    </ul>
  );
};

export default PropertyItem;
